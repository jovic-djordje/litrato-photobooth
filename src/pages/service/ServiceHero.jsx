import { ServiceHeroImg } from "../../assets/images";

const ServiceHero = () => {
  return (
    <section className="test">
      <div className="test-holder">
        <div className="test-left-side ">
          <div className="test-text-holder service-hero-text-holder">
            <div className="service-hero-headings">
              <h1>LET’S FIND THE PERFECT FIT</h1>
              <h3>Explore Our Packages</h3>
              <p>
                Thoughtfully designed options for weddings, celebrations, and
                brand events, each one created to make your photobooth
                experience feel seamless, stylish, and easy from start to
                finish.
              </p>
            </div>
          </div>
        </div>

        <div className="test-right-side service-hero-right-side">
          <div className="test-right-side-text">
            <h4>moments worth keeping</h4>
            <ServiceHeroImg className="test-img service-hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
