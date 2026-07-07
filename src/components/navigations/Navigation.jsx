import { Logo } from "../../assets/images";
import "./nav.style.css";

const Navigation = () => {
  return (
    <header className="nav">
      <div className="nav-holder">
        <div className="nav-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-text-align-justify-icon lucide-text-align-justify nav-icon"
          >
            <path d="M3 5h18" />
            <path d="M3 12h18" />
            <path d="M3 19h18" />
          </svg>
        </div>
        <Logo className="logo" />
        <button className="nav-btn">Leave review</button>
      </div>
    </header>
  );
};

export default Navigation;
