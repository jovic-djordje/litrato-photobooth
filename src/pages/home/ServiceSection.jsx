import { ServiceOne, ServiceThree, ServiceTwo } from "../../assets/images";

const ServiceSection = () => {
  const cards = [
    {
      id: 1,
      icon: <ServiceOne className="service-icon" />,
      title: "Package 1",
      text: "Perfect for shorter celebrations and simpler event setups, Package 1 offers 3 hours of booth coverage with unlimited prints, online gallery access, a custom welcome screen, your choice of backdrop, curated props, and on-site support.",
    },
    {
      id: 2,
      icon: <ServiceTwo className="service-icon" />,
      title: "Package 2",
      text: "Designed for weddings, parties, and celebrations that want a little more. Package 2 includes 4 hours of booth coverage, unlimited prints, online gallery access, a custom welcome screen, your choice of backdrop, curated props, and on-site support.",
    },
    {
      id: 3,
      icon: <ServiceThree className="service-icon" />,
      title: "Package 3",
      text: "Our most complete experience, created for celebrations where every detail matters. Package 3 includes 5 hours of booth coverage, unlimited prints, custom booth styling, backdrop choice, a photo guest book, curated props, online gallery access, and on-site support.",
    },
  ];

  return (
    <section className="service">
      <div className="service-section-holder">
        <div className="service-text-holder">
          <h4>services</h4>
          <h2>Choose Your Experience</h2>
          <p>
            Thoughtfully designed photobooth packages for weddings, private
            celebrations, and branded events,each one created to feel stylish,
            seamless, and unforgettable.
          </p>
        </div>
        <div className="service-cards-holder">
          {cards.map((card) => (
            <div className="service-card" key={card.id}>
              <div className="service-card-width">
                {card.icon}
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
        <a href="/service" className="link">
          <button className="hero-btn">
            View Packages{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right-icon lucide-arrow-right btn-icon"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </a>
      </div>
    </section>
  );
};

export default ServiceSection;
