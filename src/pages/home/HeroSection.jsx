import { HeroOne, HeroTwo } from "../../assets/images";
import "./home.style.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-holder">
        <div className="hero-left-side">
          <div className="hero-left-text-holder">
            <h4>Elevated retro booth experience</h4>
            <HeroTwo className="first-hero-img" />
            <h1>Turning moments into the dreamiest memories</h1>
            <a href="/contact" className="link">
              <button className="hero-btn">
                Book Your Date{" "}
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
            </a>
          </div>
        </div>
        <div className="hero-right-side">
          <HeroOne className="second-hero-img" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
