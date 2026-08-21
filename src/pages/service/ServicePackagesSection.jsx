import { Link } from "react-router-dom";
import {
  ServiceFourImg,
  ServiceOneImg,
  ServiceThreeImg,
  ServiceTwoImg,
} from "../../assets/images";

const ServicePackagesSection = () => {
  const carts = [
    {
      id: 1,
      title: "Package 1",
      investment: "Investment - 650$",
      text: "Perfect for shorter celebrations that still deserve a polished, memorable photo experience. Enjoy 3 hours of booth coverage with unlimited 4x6 and 2x6 prints, online gallery access, a custom welcome screen, your choice of backdrop, curated props, and on-site support.",
      pointOne: "3 hours of booth coverage",
      pointTwo: "Unlimited 4x6 and 2x6 prints, plus online gallery access",
      pointThree: "Custom details, curated props, and on-site support",
      btn: "INQUIRE",
      img: <ServiceOneImg className="service-cart-img" />,
    },
    {
      id: 2,
      title: "Package 2",
      investment: "Investment - 750$",
      text: "A beautiful fit for weddings, parties, and celebrations that call for a little more time and flexibility. This package includes 4 hours of booth coverage, unlimited prints, online gallery access, a custom welcome screen, backdrop choice, curated props, and on-site support throughout your event.",
      pointOne: "4 hours of booth coverage",
      pointTwo: "Unlimited 4x6 and 2x6 prints, plus online gallery access",
      pointThree: "Custom details, curated props, and on-site support",
      btn: "INQUIRE",
      img: <ServiceTwoImg className="service-cart-img" />,
    },
    {
      id: 3,
      title: "Package 3",
      investment: "Investment - 900$",
      text: "Designed for full-event coverage. Five hours of service with unlimited prints, online gallery, custom template & welcome screen, backdrop choice, curated props, on-site support, and a photo guest book — perfect for capturing every moment.",
      pointOne: "5 hours of booth coverage",
      pointTwo:
        "Unlimited prints, online gallery access, and custom booth styling",
      pointThree: "Photo guest book, curated props, and on-site support",
      btn: "INQUIRE",
      img: <ServiceThreeImg className="service-cart-img" />,
    },
    {
      id: 4,
      title: "ADD-ONS",
      investment: "Customize Your Experience",
      text: "Add thoughtful extras to make your photobooth experience feel even more personal. From additional event hours and extended travel to custom backdrops and keepsake details, these add-ons let you tailor the experience to your celebration",
      pointOne: "Additional hours and extended travel",
      pointTwo: "Floral or custom backdrop options",
      pointThree:
        "Guest keepsakes, including magnets, guest books, and keychains",
      btn: "INQUIRE",
      img: <ServiceFourImg className="service-cart-img" />,
    },
  ];

  return (
    <section className="packages-section">
      <div className="packages-section-holder">
        <div className="packages-cart-holder">
          {carts.map((cart) => (
            <div className="service-cart" key={cart.id}>
              <div className="service-cart-width">
                {cart.img}
                <div className="service-cart-text-holder">
                  <h3 className="service-cart-title">{cart.title}</h3>
                  <span className="service-cart-rate">{cart.investment}</span>
                  <p className="service-cart-text">{cart.text}</p>
                  <ul className="service-cart-points-holder">
                    <li className="service-cart-points">{cart.pointOne}</li>
                    <li className="service-cart-points">{cart.pointTwo}</li>
                    <li className="service-cart-points">{cart.pointThree}</li>
                  </ul>
                  <Link to="/contact" className="link">
                    <button className="hero-btn">
                      {cart.btn}{" "}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePackagesSection;
