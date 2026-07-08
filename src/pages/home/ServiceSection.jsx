import { ServiceOne, ServiceThree, ServiceTwo } from "../../assets/images";

const ServiceSection = () => {
  const cards = [
    {
      id: 1,
      icon: <ServiceOne className="service-icon" />,
      title: "Essential",
      text: "Perfect for intimate celebrations and simpler event setups, Package 1 offers a stylish digital-first photobooth experience that feels effortless from start to finish. It’s a great fit for hosts who want the magic of the booth in a more streamlined format",
    },
    {
      id: 2,
      icon: <ServiceTwo className="service-icon" />,
      title: "Signature",
      text: "Designed for events that want a little more, more detail, more guest interaction, and more keepsakes to take home. With prints and custom touches, it creates an experience that feels both polished and memorable",
    },
    {
      id: 3,
      icon: <ServiceThree className="service-icon" />,
      title: "Luxe",
      text: "Most complete experience, created for celebrations where every detail matters. With added customization and thoughtful extras, it’s ideal for events that want the fullest version of the Litrato experience.",
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
      </div>
    </section>
  );
};

export default ServiceSection;
