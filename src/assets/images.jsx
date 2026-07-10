import logo from "./logo.png";
import heroTwo from "./heroTwo.webp";
import heroOne from "./heroOne.webp";
import serviceOne from "./serviceOne.png";
import serviceTwo from "./serviceTwo.png";
import serviceThree from "./serviceThree.png";
import testimonial from "./testimonial.webp";
import logoOne from "./snowbunny.png";
import logoTwo from "./St-Regis.png";

const Logo = ({ className }) => {
  return <img src={logo} alt="logo" className={className} />;
};

const HeroTwo = ({ className }) => {
  return <img src={heroTwo} alt="" className={className} />;
};

const HeroOne = ({ className }) => {
  return <img src={heroOne} alt="" className={className} />;
};

const ServiceOne = ({ className }) => {
  return <img src={serviceOne} alt="film reel icon" className={className} />;
};

const ServiceTwo = ({ className }) => {
  return (
    <img src={serviceTwo} alt="photo gallery icon" className={className} />
  );
};

const ServiceThree = ({ className }) => {
  return <img src={serviceThree} alt="gallery icon" className={className} />;
};

const Testimonial = ({ className }) => {
  return <img src={testimonial} alt="" className={className} />;
};

const LogoOne = ({ className }) => {
  return <img src={logoOne} alt="snowbunny logo" className={className} />;
};

const LogoTwo = ({ className }) => {
  return <img src={logoTwo} alt="st-regis logo" className={className} />;
};

export {
  Logo,
  HeroTwo,
  HeroOne,
  ServiceOne,
  ServiceTwo,
  ServiceThree,
  Testimonial,
  LogoOne,
  LogoTwo,
};
