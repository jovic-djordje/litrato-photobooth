import logo from "./logo.webp";
import menuIcon from "./main-menu.png";
import heroTwo from "./heroTwo.webp";
import heroOne from "./heroOne.webp";
import serviceOne from "./serviceOne.png";
import serviceTwo from "./serviceTwo.png";
import serviceThree from "./serviceThree.png";
import testimonial from "./testimonial.webp";
import logoOne from "./snowbunny.webp";
import logoTwo from "./St-Regis.webp";
import bookingImg from "./booking.webp";
import footerOne from "./footerOne.webp";
import footerTwo from "./footerTwo.webp";
import footerThree from "./footerThree.webp";
import footerFour from "./footerFour.webp";
import footerFive from "./footerFive.webp";
import footerSix from "./footerSix.webp";
import galleryOne from "./galleryOne.webp";
import galleryTwo from "./galleryTwo.webp";
import galleryThree from "./galleryThree.webp";
import galleryFour from "./galleryFour.webp";
import galleryBooking from "./galleryBooking.webp";
import serviceHeroImg from "./serviceHero.webp";
import serviceOneImg from "./serviceOne.webp";
import serviceTwoImg from "./serviceTwo.webp";
import serviceThreeImg from "./serviceThree.webp";
import serviceFourImg from "./serviceFour.webp";

/*
  width/height = displayed size from PageSpeed report (already matches
  the resized source files). Update these two numbers if you resize a
  file differently later — keep the actual aspect ratio consistent.
*/

const Logo = ({ className }) => {
  return (
    <img
      src={logo}
      alt="logo"
      className={className}
      width={263}
      height={82}
      loading="lazy"
      decoding="async"
    />
  );
};

const MenuIcon = ({ className }) => {
  return (
    <img
      src={menuIcon}
      alt=""
      className={className}
      width={32}
      height={32}
      loading="lazy"
      decoding="async"
    />
  );
};

// LCP candidates: load eagerly with high priority, never lazy
const HeroTwo = ({ className }) => {
  return (
    <img
      src={heroTwo}
      alt=""
      className={className}
      width={560}
      height={747}
      loading="eager"
      fetchPriority="high"
      decoding="async"
    />
  );
};

const HeroOne = ({ className }) => {
  return (
    <img
      src={heroOne}
      alt=""
      className={className}
      width={560}
      height={747}
      loading="eager"
      fetchPriority="high"
      decoding="async"
    />
  );
};

const ServiceOne = ({ className }) => {
  return (
    <img
      src={serviceOne}
      alt="film reel icon"
      className={className}
      width={64}
      height={64}
      loading="lazy"
      decoding="async"
    />
  );
};

const ServiceTwo = ({ className }) => {
  return (
    <img
      src={serviceTwo}
      alt="photo gallery icon"
      className={className}
      width={64}
      height={64}
      loading="lazy"
      decoding="async"
    />
  );
};

const ServiceThree = ({ className }) => {
  return (
    <img
      src={serviceThree}
      alt="gallery icon"
      className={className}
      width={64}
      height={64}
      loading="lazy"
      decoding="async"
    />
  );
};

const Testimonial = ({ className }) => {
  return (
    <img
      src={testimonial}
      alt=""
      className={className}
      width={560}
      height={749}
      loading="lazy"
      decoding="async"
    />
  );
};

const LogoOne = ({ className }) => {
  return (
    <img
      src={logoOne}
      alt="snowbunny logo"
      className={className}
      loading="lazy"
    />
  );
};

const LogoTwo = ({ className }) => {
  return (
    <img
      src={logoTwo}
      alt="st-regis logo"
      className={className}
      loading="lazy"
    />
  );
};

const BookingImg = ({ className }) => {
  return (
    <img
      src={bookingImg}
      alt=""
      className={className}
      width={560}
      height={749}
      loading="lazy"
      decoding="async"
    />
  );
};

const FooterOne = ({ className }) => {
  return (
    <img
      src={footerOne}
      alt=""
      className={className}
      width={361}
      height={541}
      loading="lazy"
      decoding="async"
    />
  );
};

const FooterTwo = ({ className }) => {
  return (
    <img
      src={footerTwo}
      alt=""
      className={className}
      width={361}
      height={541}
      loading="lazy"
      decoding="async"
    />
  );
};

const FooterThree = ({ className }) => {
  return (
    <img
      src={footerThree}
      alt=""
      className={className}
      width={361}
      height={542}
      loading="lazy"
      decoding="async"
    />
  );
};

const FooterFour = ({ className }) => {
  return (
    <img
      src={footerFour}
      alt=""
      className={className}
      width={361}
      height={641}
      loading="lazy"
      decoding="async"
    />
  );
};

const FooterFive = ({ className }) => {
  return (
    <img
      src={footerFive}
      alt=""
      className={className}
      width={361}
      height={541}
      loading="lazy"
      decoding="async"
    />
  );
};

const FooterSix = ({ className }) => {
  return (
    <img
      src={footerSix}
      alt=""
      className={className}
      width={361}
      height={541}
      loading="lazy"
      decoding="async"
    />
  );
};

const GalleryOne = ({ className }) => {
  return (
    <img
      src={galleryOne}
      alt=""
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
};

const GalleryTwo = ({ className }) => {
  return (
    <img
      src={galleryTwo}
      alt=""
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
};

const GalleryThree = ({ className }) => {
  return (
    <img
      src={galleryThree}
      alt=""
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
};

const GalleryFour = ({ className }) => {
  return (
    <img
      src={galleryFour}
      alt=""
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
};

const GalleryBooking = ({ className }) => {
  return (
    <img
      src={galleryBooking}
      alt=""
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
};

const ServiceHeroImg = ({ className }) => {
  return (
    <img
      src={serviceHeroImg}
      alt=""
      className={className}
      loading="eager"
      fetchPriority="high"
      decoding="async"
    />
  );
};

const ServiceOneImg = ({ className }) => {
  return (
    <img
      src={serviceOneImg}
      alt=""
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
};

const ServiceTwoImg = ({ className }) => {
  return (
    <img
      src={serviceTwoImg}
      alt=""
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
};

const ServiceThreeImg = ({ className }) => {
  return (
    <img
      src={serviceThreeImg}
      alt=""
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
};

const ServiceFourImg = ({ className }) => {
  return (
    <img
      src={serviceFourImg}
      alt=""
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
};

export {
  Logo,
  MenuIcon,
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
  GalleryOne,
  GalleryTwo,
  GalleryThree,
  GalleryFour,
  GalleryBooking,
  ServiceHeroImg,
  ServiceOneImg,
  ServiceTwoImg,
  ServiceThreeImg,
  ServiceFourImg,
};
