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
  return (
    <footer>
      <div className="footer-holder">
        <div className="footer-text-holder">
          <div className="footer-text-left-side">
            <Logo className="logo" />
            <p>
              SERVING ASPEN - SNOWMASS - BASALT VAIL AND NEARBY COLORADO TOWNS
            </p>
          </div>

          <div className="footer-text-right-side">
            <ul className="footer-nav">
              <li className="footer-nav-title">Navigate</li>
              <li>SERVICES</li>
              <li>GALLERY</li>
              <li>CONTACT</li>
            </ul>

            <ul className="footer-nav">
              <li className="footer-nav-title">Connect</li>
              <li>Instagram</li>
              <li>Phone</li>
              <li>Email</li>
            </ul>
          </div>
        </div>

        <div className="footer-img-holder">
          {images.map((img) => (
            <div key={img.id} className="img-holder">
              {img.img}
            </div>
          ))}
        </div>
        <div className="copy">
          <p>© 2026 Litrato.All rights reserved.</p>
          <div className="links">
            <p>TERMS & PRIVACY</p>
            <p>CREDIT</p>
            <p>BACK TO TOP</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
