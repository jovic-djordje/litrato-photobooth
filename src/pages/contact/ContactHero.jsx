import { FooterFive } from "../../assets/images";

const ContactHero = () => {
  return (
    <section className="test">
      <div className="test-holder">
        <div className="test-left-side ">
          <div className="test-text-holder service-hero-text-holder">
            <div className="service-hero-headings">
              <h1>Let’s start planning</h1>
              <h3>Inquire With Us</h3>
              <p>
                Fill out the form below with a few details about your event, and
                we’ll be in touch soon. Whether you’re planning a wedding,
                celebration, or brand event, we’d love to help create a
                photobooth experience that feels special from start to finish.
              </p>
            </div>
          </div>
        </div>

        <div className="test-right-side service-hero-right-side">
          <div className="test-right-side-text">
            <h4>where the memories begin</h4>
            <FooterFive className="test-img service-hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
