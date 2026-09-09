import { useEffect, useState } from "react";
import { useLitratoStore } from "../../store/litratoStore";
import {
  GalleryOne,
  GalleryTwo,
  GalleryThree,
  GalleryFour,
} from "../../assets/images";
import "./gallery.style.css";

const GallerySection = () => {
  // POVLAČIMO publicGalleries UMJESTO galleries
  const galleries = useLitratoStore((state) => state.publicGalleries) || [];
  const fetchPublicGalleries = useLitratoStore(
    (state) => state.fetchPublicGalleries,
  );
  const verifyGalleryCode = useLitratoStore((state) => state.verifyGalleryCode);
  const [loading, setLoading] = useState(true);

  const [activeId, setActiveId] = useState(null);
  const [codeInput, setCodeInput] = useState("");
  const [errorId, setErrorId] = useState(null);
  const [checking, setChecking] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      if (fetchPublicGalleries) await fetchPublicGalleries();
      setLoading(false);
    };
    loadData();
  }, [fetchPublicGalleries]);

  const defaultImages = [GalleryOne, GalleryTwo, GalleryThree, GalleryFour];

  const openPrompt = (id) => {
    setActiveId(id);
    setCodeInput("");
    setErrorId(null);
  };

  const closePrompt = () => {
    setActiveId(null);
    setCodeInput("");
    setErrorId(null);
  };

  const handleUnlock = async (gallery) => {
    setChecking(true);
    const url = await verifyGalleryCode(gallery.id, codeInput.trim());
    setChecking(false);

    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
      closePrompt();
    } else {
      setErrorId(gallery.id);
    }
  };

  return (
    <section className="gallery">
      <div className="gallery-holder">
        <div className="gallery-text-holder">
          <h1 className="gallery-section-title">Gallery</h1>
          <p className="gallery-section-text">
            A curated collection of moments, details, and celebrations captured
            through the Litrato experience.
          </p>
        </div>

        <div className="gallery-section-holder">
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div className="gallery-cart-holder gallery-skeleton" key={i} />
            ))
          ) : galleries.length === 0 ? (
            <p
              style={{ textAlign: "center", width: "100%", padding: "40px 0" }}
            >
              No galleries yet.
            </p>
          ) : (
            galleries.map((gallery, index) => {
              const thumb = gallery.thumbnailUrl || gallery.thumbnail_url;
              const DefaultImg = defaultImages[index % defaultImages.length];
              const isActive = activeId === gallery.id;

              return (
                <div
                  className="gallery-cart-holder"
                  key={gallery.id}
                  onClick={() => !isActive && openPrompt(gallery.id)}
                  style={{ cursor: "pointer" }}
                >
                  {/* WRAPPER OKO SLIKE KOJI DRŽI OVERLAY */}
                  <div className="gallery-img-wrapper">
                    {thumb ? (
                      <img
                        src={thumb}
                        alt={gallery.title}
                        className="gallery-img"
                      />
                    ) : (
                      <DefaultImg className="gallery-img" />
                    )}

                    {isActive && (
                      <div
                        className="gallery-passcode-overlay"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="gallery-overlay-title">
                          Private Gallery
                        </span>
                        <input
                          type="password"
                          className="gallery-passcode-input"
                          placeholder="Enter access code"
                          value={codeInput}
                          onChange={(e) => setCodeInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") handleUnlock(gallery);
                          }}
                          autoFocus
                        />
                        <div className="gallery-overlay-buttons">
                          <button
                            className="gallery-btn-unlock"
                            onClick={() => handleUnlock(gallery)}
                            disabled={checking}
                          >
                            {checking ? "Checking..." : "Unlock"}
                          </button>
                          <button
                            className="gallery-btn-cancel"
                            onClick={closePrompt}
                          >
                            Cancel
                          </button>
                        </div>

                        {errorId === gallery.id && (
                          <span className="gallery-error-text">
                            Incorrect code. Please try again.
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="gallery-cart-text-holder">
                    <span>{gallery.title}</span>
                    <span>{gallery.date}</span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
