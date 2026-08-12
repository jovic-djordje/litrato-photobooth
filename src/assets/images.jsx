import logo from "./logo.png";
import heroTwo from "./heroTwo.webp";
import heroOne from "./heroOne.webp";
import serviceOne from "./serviceOne.png";
import serviceTwo from "./serviceTwo.png";
import serviceThree from "./serviceThree.png";
import testimonial from "./testimonial.webp";
import logoOne from "./snowbunny.png";
import logoTwo from "./St-Regis.png";
import bookingImg from "./booking.webp";
import footerOne from "./footerOne.webp";
import footerTwo from "./footerTwo.webp";
import footerThree from "./footerThree.webp";
import footerFour from "./footerFour.webp";
import footerFive from "./footerFive.webp";
import footerSix from "./footerSix.webp";

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

const BookingImg = ({ className }) => {
  return <img src={bookingImg} alt="" className={className} />;
};

const FooterOne = ({ className }) => {
  return <img src={footerOne} alt="" className={className} />;
};

const FooterTwo = ({ className }) => {
  return <img src={footerTwo} alt="" className={className} />;
};

const FooterThree = ({ className }) => {
  return <img src={footerThree} alt="" className={className} />;
};

const FooterFour = ({ className }) => {
  return <img src={footerFour} alt="" className={className} />;
};

const FooterFive = ({ className }) => {
  return <img src={footerFive} alt="" className={className} />;
};

const FooterSix = ({ className }) => {
  return <img src={footerSix} alt="" className={className} />;
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
  BookingImg,
  FooterOne,
  FooterTwo,
  FooterThree,
  FooterFour,
  FooterFive,
  FooterSix,
};
