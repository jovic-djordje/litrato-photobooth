import ServiceHero from "./ServiceHero";
import BookingSection from "../home/BookingSection";

import "./service.style.css";
import { GalleryBooking } from "../../assets/images";
import ServicePackagesSection from "./ServicePackagesSection";

const HomeService = () => {
  return (
    <>
      <ServiceHero />
      <ServicePackagesSection />
      <BookingSection imageComponent={GalleryBooking} />
    </>
  );
};

export default HomeService;
