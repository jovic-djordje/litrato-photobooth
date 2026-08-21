import { Link } from "react-router-dom";
import {
  FooterFive,
  FooterFour,
  FooterOne,
  FooterSix,
  FooterThree,
  FooterTwo,
  Logo,
} from "../../assets/images";

const images = [
  { id: 1, img: <FooterOne className="footer-img" /> },
  { id: 2, img: <FooterTwo className="footer-img" /> },
  { id: 3, img: <FooterThree className="footer-img" /> },
  { id: 4, img: <FooterFour className="footer-img" /> },
  { id: 5, img: <FooterFive className="footer-img" /> },
  { id: 6, img: <FooterSix className="footer-img" /> },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <div className="footer-holder">
        <div className="footer-text-holder">
          <div className="footer-text-left-side">
            <Link to="/" className="link" aria-label="Go to homepage">
              <Logo className="logo" />
            </Link>

            <p>
              SERVING ASPEN - SNOWMASS - BASALT - VAIL AND NEARBY COLORADO TOWNS
            </p>
          </div>

          <div className="footer-text-right-side">
            <nav aria-label="Footer navigation">
              <ul className="footer-nav">
                <li className="footer-nav-title">Navigate</li>

                <li>
                  <Link to="/service" className="link">
                    SERVICES
                  </Link>
                </li>

                <li>
                  <Link to="/gallery" className="link">
                    GALLERY
                  </Link>
                </li>

                <li>
                  <Link to="/contact" className="link">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </nav>

            <nav aria-label="Contact links">
              <ul className="footer-nav">
                <li className="footer-nav-title">Connect</li>

                <li>
                  <a
                    href="https://www.instagram.com/litratoco_/"
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    INSTAGRAM
                  </a>
                </li>

                <li>
                  <a href="tel:+9709307157" className="link">
                    PHONE
                  </a>
                </li>

                <li>
                  <a href="mailto:samantha@litratoco.com" className="link">
                    EMAIL
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="footer-img-holder">
          {images.map((image) => (
            <div key={image.id} className="img-holder">
              {image.img}
            </div>
          ))}
        </div>

        <div className="copy">
          <p>© 2026 Litrato. All rights reserved.</p>

          <div className="links">
            <Link to="/terms" className="link">
              TERMS &amp; PRIVACY
            </Link>

            <Link
              to="https://jovicweb.dev/"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              CREDIT
            </Link>

            <button type="button" className="back-to-top" onClick={scrollToTop}>
              BACK TO TOP
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
