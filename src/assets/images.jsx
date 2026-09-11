import logo from "./logo.webp";
import menuIcon from "./main-menu.png";
const heroTwo = "/heroTwo.webp";
const heroOne = "./heroOne.webp";
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

const imageProps = {
  loading: "lazy",
  decoding: "async",
};

const Logo = ({ className }) => (
  <img
    src={logo}
    alt="logo"
    className={className}
    width={263}
    height={82}
    {...imageProps}
  />
);

const MenuIcon = ({ className }) => (
  <img
    src={menuIcon}
    alt=""
    className={className}
    width={32}
    height={32}
    {...imageProps}
  />
);

// Only the actual homepage LCP candidate should be eager/high priority.
const HeroTwo = ({ className }) => (
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

const HeroOne = ({ className }) => (
  <img
    src={heroOne}
    alt="Litrato Photobooth"
    className={className}
    width={560}
    height={747}
    loading="eager"
    fetchPriority="high"
    decoding="async"
  />
);

const ServiceOne = ({ className }) => (
  <img
    src={serviceOne}
    alt="film reel icon"
    className={className}
    width={64}
    height={64}
    {...imageProps}
  />
);

const ServiceTwo = ({ className }) => (
  <img
    src={serviceTwo}
    alt="photo gallery icon"
    className={className}
    width={64}
    height={64}
    {...imageProps}
  />
);

const ServiceThree = ({ className }) => (
  <img
    src={serviceThree}
    alt="gallery icon"
    className={className}
    width={64}
    height={64}
    {...imageProps}
  />
);

const Testimonial = ({ className }) => {
  return (
    <img
      src={testimonial}
      alt=""
      className={className}
      width={560}
      height={842}
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
      decoding="async"
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
      decoding="async"
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
      height={842}
      loading="lazy"
      decoding="async"
    />
  );
};
const FooterOne = ({ className }) => (
  <img
    src={footerOne}
    alt=""
    className={className}
    width={361}
    height={541}
    {...imageProps}
  />
);

const FooterTwo = ({ className }) => (
  <img
    src={footerTwo}
    alt=""
    className={className}
    width={361}
    height={541}
    {...imageProps}
  />
);

const FooterThree = ({ className }) => (
  <img
    src={footerThree}
    alt=""
    className={className}
    width={361}
    height={542}
    {...imageProps}
  />
);

const FooterFour = ({ className }) => (
  <img
    src={footerFour}
    alt=""
    className={className}
    width={361}
    height={641}
    {...imageProps}
  />
);

const FooterFive = ({ className }) => (
  <img
    src={footerFive}
    alt=""
    className={className}
    width={361}
    height={541}
    {...imageProps}
  />
);

const FooterSix = ({ className }) => (
  <img
    src={footerSix}
    alt=""
    className={className}
    width={361}
    height={541}
    {...imageProps}
  />
);

const GalleryOne = ({ className }) => (
  <img src={galleryOne} alt="" className={className} {...imageProps} />
);

const GalleryTwo = ({ className }) => (
  <img src={galleryTwo} alt="" className={className} {...imageProps} />
);

const GalleryThree = ({ className }) => (
  <img src={galleryThree} alt="" className={className} {...imageProps} />
);

const GalleryFour = ({ className }) => (
  <img src={galleryFour} alt="" className={className} {...imageProps} />
);

const GalleryBooking = ({ className }) => (
  <img src={galleryBooking} alt="" className={className} {...imageProps} />
);

const ServiceHeroImg = ({ className }) => (
  <img
    src={serviceHeroImg}
    alt=""
    className={className}
    loading="lazy"
    decoding="async"
  />
);

const ServiceOneImg = ({ className }) => (
  <img src={serviceOneImg} alt="" className={className} {...imageProps} />
);

const ServiceTwoImg = ({ className }) => (
  <img src={serviceTwoImg} alt="" className={className} {...imageProps} />
);

const ServiceThreeImg = ({ className }) => (
  <img src={serviceThreeImg} alt="" className={className} {...imageProps} />
);

const ServiceFourImg = ({ className }) => (
  <img src={serviceFourImg} alt="" className={className} {...imageProps} />
);

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
