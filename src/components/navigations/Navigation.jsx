import { useEffect, useState } from "react";
import { Logo } from "../../assets/images";
import { Squeeze as Hamburger } from "hamburger-react";
import "./nav.style.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
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

        <a href="/" className="link">
          <Logo className="logo" />
        </a>

        <button type="button" className="nav-btn">
          Leave review
        </button>
      </div>

      <nav
        className={`mobile-nav ${isOpen ? "mobile-nav--open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="mobile-nav-content">
          <a href="/" onClick={closeMenu}>
            Home
          </a>

          <a href="/service" onClick={closeMenu}>
            Services
          </a>

          <a href="/gallery" onClick={closeMenu}>
            Gallery
          </a>

          <a href="/contact" onClick={closeMenu}>
            Contact
          </a>

          <button type="button" className="nav-btn nav-btn-mobile">
            Leave review
          </button>
        </div>

        <div className="mobile-nav-bottom">
          <a href="https://www.instagram.com/litratoco_/" target="_blank">
            Instagram
          </a>

          <a href="mailto:samantha@litratoco.com" target="_blank">
            Email
          </a>

          <a href="tel:+9709307157">Phone</a>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
