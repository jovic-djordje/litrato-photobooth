const inputFields = [
  {
    id: "name",
    label: "WHAT’S YOUR NAME?",
    type: "text",
    name: "name",
    placeholder: "Full Name",
  },
  {
    id: "email",
    label: "EMAIL ADDRESS?",
    type: "email",
    name: "email",
    placeholder: "your@email.com",
  },
  {
    id: "phone",
    label: "PHONE NUMBER?",
    type: "tel",
    name: "phone",
    placeholder: "(555) 123-4567",
  },
  {
    id: "date",
    label: "WHEN IS YOUR EVENT?",
    type: "text",
    name: "date",
    placeholder: "Day, Month, Year",
  },
  {
    id: "timeframe",
    label: "WHAT'S THE RENTAL TIMEFRAME?",
    type: "text",
    name: "timeframe",
    placeholder: "ex. 6:00 PM - 10:00 PM",
  },
  {
    id: "venue",
    label: "WHERE IS YOUR EVENT?",
    type: "text",
    name: "venue",
    placeholder: "Venue, City, State",
  },
  {
    id: "event-type",
    label: "WHAT TYPE OF EVENT ARE YOU PLANNING?",
    type: "text",
    name: "eventType",
    placeholder: "ex. Wedding",
  },
  {
    id: "guests",
    label: "HOW MANY GUESTS ARE YOU EXPECTING?",
    type: "number",
    name: "guests",
    placeholder: "e.g. 120 guests",
  },
];

const packages = [
  {
    id: "package-1",
    label: "Package 1",
    duration: "3 hours",
  },
  {
    id: "package-2",
    label: "Package 2",
    duration: "4 hours",
  },
  {
    id: "package-3",
    label: "Package 3",
    duration: "5 hours",
  },
];

const ContactForm = () => {
  return (
    <section className="contact-form">
      <div className="contact-form-holder">
        <form action="" method="post">
          {inputFields.map((field) => (
            <div className="input-holder" key={field.id}>
              <label htmlFor={field.id}>{field.label}</label>

              <input
                id={field.id}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                required={field.id === "name" || field.id === "email"}
              />
            </div>
          ))}

          <fieldset className="input-holder input-check-holder">
            <legend>WHAT PACKAGE ARE YOU INTERESTED IN?</legend>

            {packages.map((item) => (
              <label className="check-holder" key={item.id}>
                <input type="checkbox" name="packages" value={item.label} />

                <span>
                  {item.label} | <small>{item.duration}</small>
                </span>
              </label>
            ))}
          </fieldset>

          <div className="input-holder textarea-holder">
            <label htmlFor="message">
              ANYTHING ELSE YOU’D LIKE US TO KNOW?
            </label>

            <textarea
              id="message"
              name="message"
              placeholder="Share your vision, timeline, or any details that would be helpful"
            />
          </div>

          <button type="submit" className="contact-form-btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
