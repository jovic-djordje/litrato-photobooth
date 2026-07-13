import BookingSection from "./BookingSection";
import HeroSection from "./HeroSection";
import LogoBanner from "./LogoBanner";
import ServiceSection from "./ServiceSection";
import TestSection from "./TestSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <TestSection />
      <LogoBanner />
      <BookingSection />
    </>
  );
};

export default Home;
