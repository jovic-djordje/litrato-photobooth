import { lazy, Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/images";
import { Squeeze as Hamburger } from "hamburger-react";
import "./nav.style.css";

const ReviewModal = lazy(() => import("./ReviewModal"));

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const openReviewModal = () => {
    setIsOpen(false);
    setIsReviewOpen(true);
  };

  const closeReviewModal = () => {
    setIsReviewOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={`nav ${isOpen ? "nav--open" : ""}`}>
      <div className="nav-holder">
        <div className="nav-left">
          <div className="nav-menu-button">
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              size={28}
              color="#282828"
              rounded
              label={isOpen ? "Close menu" : "Open menu"}
            />
          </div>
        </div>

        <Link to="/" className="link">
          <Logo className="logo" />
        </Link>

        <button type="button" className="nav-btn" onClick={openReviewModal}>
          Leave review
        </button>
      </div>

      <nav
        className={`mobile-nav ${isOpen ? "mobile-nav--open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="mobile-nav-content">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/service" onClick={closeMenu}>
            Services
          </Link>

          <Link to="/gallery" onClick={closeMenu}>
            Gallery
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>

          <button
            type="button"
            className="nav-btn nav-btn-mobile"
            onClick={openReviewModal}
          >
            Leave review
          </button>
        </div>

        <div className="mobile-nav-bottom">
          <a
            href="https://www.instagram.com/litratoco_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="mailto:samantha@litratoco.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>

          <a href="tel:+9709307157">Phone</a>
        </div>
      </nav>

      <Suspense fallback={null}>
        {isReviewOpen && (
          <ReviewModal open={isReviewOpen} onClose={closeReviewModal} />
        )}
      </Suspense>
    </header>
  );
};

export default Navigation;
