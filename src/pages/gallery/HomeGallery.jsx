import BookingSection from "../home/BookingSection";
import GallerySection from "./GallerySection";
import { GalleryBooking } from "../../assets/images";

const HomeGallery = () => {
  return (
    <>
      <GallerySection />
      <BookingSection imageComponent={GalleryBooking} />
    </>
  );
};

export default HomeGallery;
