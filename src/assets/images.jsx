import logo from "./logo.png";
import heroTwo from "./heroTwo.webp";
import heroOne from "./heroOne.webp";

const Logo = ({ className }) => {
  return <img src={logo} alt="logo" className={className} />;
};

const HeroTwo = ({ className }) => {
  return <img src={heroTwo} alt="" className={className} />;
};

const HeroOne = ({ className }) => {
  return <img src={heroOne} alt="" className={className} />;
};

export { Logo, HeroTwo, HeroOne };
