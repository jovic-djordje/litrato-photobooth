import ServiceHero from "./ServiceHero";
import BookingSection from "../home/BookingSection";

import "./service.style.css";
import { GalleryBooking } from "../../assets/images";

const HomeService = () => {
  return (
    <>
      <ServiceHero />
      <BookingSection imageComponent={GalleryBooking} />
    </>
  );
};

export default HomeService;
