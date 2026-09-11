import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePublicStore } from "../../store/publicStore";
import {
  ServiceFourImg,
  ServiceOneImg,
  ServiceThreeImg,
  ServiceTwoImg,
} from "../../assets/images";

const ServicePackagesSection = () => {
  const packages = usePublicStore((state) => state.packages) || [];
  const fetchPackages = usePublicStore((state) => state.fetchPackages);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      if (fetchPackages) {
        await fetchPackages();
      }
      setLoading(false);
    };

    loadData();
  }, [fetchPackages]);

  const defaultImages = [
    <ServiceOneImg className="service-cart-img" key="1" />,
    <ServiceTwoImg className="service-cart-img" key="2" />,
    <ServiceThreeImg className="service-cart-img" key="3" />,
    <ServiceFourImg className="service-cart-img" key="4" />,
  ];

  return (
    <section className="packages-section">
      <div className="packages-section-holder">
        <div className="packages-cart-holder">
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div className="service-cart-skeleton" key={i} />
            ))
          ) : packages.length === 0 ? (
            <p
              style={{ textAlign: "center", width: "100%", padding: "40px 0" }}
            >
              Trenutno nema dostupnih paketa. Dodajte ih kroz Admin Panel.
            </p>
          ) : (
            packages.map((cart, index) => {
              const point1 = cart.pointOne || cart.point_one;
              const point2 = cart.pointTwo || cart.point_two;
              const point3 = cart.pointThree || cart.point_three;
              const imgUrl = cart.imgUrl || cart.img_url || cart.image_url;

              return (
                <div
                  className="service-cart"
                  key={cart.id || index}
                  style={{ "--card-index": index }}
                >
                  <div className="service-cart-width">
                    {imgUrl ? (
                      <img
                        src={imgUrl}
                        alt={cart.title}
                        className="service-cart-img"
                      />
                    ) : (
                      defaultImages[index % defaultImages.length]
                    )}

                    <div className="service-cart-text-holder">
                      <h3 className="service-cart-title">{cart.title}</h3>
                      <span className="service-cart-rate">
                        {cart.investment}
                      </span>
                      <p className="service-cart-text">{cart.text}</p>

                      <ul className="service-cart-points-holder">
                        {point1 && (
                          <li className="service-cart-points">{point1}</li>
                        )}
                        {point2 && (
                          <li className="service-cart-points">{point2}</li>
                        )}
                        {point3 && (
                          <li className="service-cart-points">{point3}</li>
                        )}
                      </ul>

                      <Link to="/contact" className="link">
                        <button className="hero-btn">
                          {cart.btn || "INQUIRE"}{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-arrow-right-icon lucide-arrow-right btn-icon"
                          >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                          </svg>
                        </button>
                      </Link>
                    </div>
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

export default ServicePackagesSection;
