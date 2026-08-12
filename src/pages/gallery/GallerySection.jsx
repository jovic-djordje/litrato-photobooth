import {
  GalleryFour,
  GalleryOne,
  GalleryThree,
  GalleryTwo,
} from "../../assets/images";
import "./gallery.style.css";

const galleries = [
  {
    id: 1,
    img: <GalleryOne className="gallery-img" />,
    title: "CRHS PROM",
    date: "05-08-26",
  },
  {
    id: 2,
    img: <GalleryTwo className="gallery-img" />,
    title: "DOUGLAS GATSBY NIGHT",
    date: "03-15-26",
  },
  {
    id: 3,
    img: <GalleryThree className="gallery-img" />,
    title: "Snowbunny MAREA",
    date: "03-05-26",
  },
  {
    id: 4,
    img: <GalleryFour className="gallery-img" />,
    title: "Maddie's Last Rodeo",
    date: "02-15-26",
  },
];

const GallerySection = () => {
  return (
    <section className="gallery">
      <div className="gallery-holder">
        <div className="gallery-text-holder">
          <h1 className="gallery-section-title">Gallery</h1>
          <p className="gallery-section-text">
            A curated collection of moments, details, and celebrations captured
            through the Litrato experience.
          </p>
        </div>

        <div className="gallery-section-holder">
          {galleries.map((gallery) => (
            <div className="gallery-cart-holder" key={gallery.id}>
              {gallery.img}
              <div className="gallery-cart-text-holder">
                <span>{gallery.title}</span>
                <span>{gallery.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
