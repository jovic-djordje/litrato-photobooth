import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { supabase } from "../../library/supabase.js";

import "./contact.style.css";

const inputFields = [
  {
    id: "name",
    label: "WHAT'S YOUR NAME?",
    type: "text",
    name: "name",
    placeholder: "Full Name",
    required: true,
  },
  {
    id: "email",
    label: "EMAIL ADDRESS?",
    type: "email",
    name: "email",
    placeholder: "your@email.com",
    required: true,
  },
  {
    id: "phone",
    label: "PHONE NUMBER?",
    type: "tel",
    name: "phone",
    placeholder: "(555) 123-4567",
    required: true,
  },
  {
    id: "date",
    label: "WHEN IS YOUR EVENT?",
    type: "text",
    name: "date",
    placeholder: "Day, Month, Year",
    required: true,
  },
  {
    id: "timeframe",
    label: "WHAT'S THE RENTAL TIMEFRAME?",
    type: "text",
    name: "timeframe",
    placeholder: "ex. 6:00 PM - 10:00 PM",
    required: true,
  },
  {
    id: "venue",
    label: "WHERE IS YOUR EVENT?",
    type: "text",
    name: "venue",
    placeholder: "Venue, City, State",
    required: true,
  },
  {
    id: "event-type",
    label: "WHAT TYPE OF EVENT ARE YOU PLANNING?",
    type: "text",
    name: "eventType",
    placeholder: "ex. Wedding",
    required: true,
  },
  {
    id: "guests",
    label: "HOW MANY GUESTS ARE YOU EXPECTING?",
    type: "number",
    name: "guests",
    placeholder: "e.g. 120 guests",
    required: true,
  },
];

const packages = [
  { id: "package-1", label: "Package 1", duration: "3 hours" },
  { id: "package-2", label: "Package 2", duration: "4 hours" },
  { id: "package-3", label: "Package 3", duration: "5 hours" },
];

const initialState = {
  name: "",
  email: "",
  phone: "",
  date: "",
  timeframe: "",
  venue: "",
  eventType: "",
  guests: "",
  message: "",
};

const ContactForm = () => {
  const [input, setInput] = useState(initialState);
  const [packageSelected, setPackageSelected] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handlePackageSelect = (label) => {
    setPackageSelected(label);
  };

  const validateForm = () => {
    const newErrors = {};

    inputFields.forEach((field) => {
      if (field.required && !input[field.name]?.toString().trim()) {
        newErrors[field.name] = `${field.label.replace("?", "")} is required`;
      }
    });

    if (input.email && !/\S+@\S+\.\S+/.test(input.email)) {
      newErrors.email = "Please enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setSuccess(false);

    try {
      const { error } = await supabase.from("inquiries").insert([
        {
          name: input.name,
          email: input.email,
          phone: input.phone || null,
          event_date: input.date || null,
          timeframe: input.timeframe || null,
          venue: input.venue || null,
          event_type: input.eventType || null,
          guests: input.guests ? parseInt(input.guests) : null,
          package: packageSelected || null,
          message: input.message || null,
        },
      ]);

      if (error) throw error;

      setSuccess(true);
      setInput(initialState);
      setPackageSelected("");

      // vrati dugme na normalno stanje nakon 3s
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Error saving inquiry:", error);
      setErrors({ general: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-form">
      <div className="contact-form-holder">
        <form onSubmit={handleSubmit}>
          {errors.general && (
            <div
              className="error-message"
              style={{ color: "red", marginBottom: "1rem" }}
            >
              {errors.general}
            </div>
          )}

          {inputFields.map((field) => (
            <div className="input-holder" key={field.id}>
              <div className="label-holder">
                <label htmlFor={field.id}>{field.label}</label>
                {errors[field.name] && (
                  <p style={{ color: "red", fontSize: "0.8rem" }}>
                    {errors[field.name]}
                  </p>
                )}
              </div>

              <input
                id={field.id}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={input[field.name]}
                onChange={handleInput}
                required={field.required}
                style={{
                  outline: errors[field.name] ? "1px solid red" : "none",
                }}
              />
            </div>
          ))}

          <fieldset className="input-holder input-check-holder">
            <legend>WHAT PACKAGE ARE YOU INTERESTED IN?</legend>

            {packages.map((item) => (
              <label className="check-holder" key={item.id}>
                <input
                  type="checkbox"
                  name="packages"
                  value={item.label}
                  checked={packageSelected === item.label}
                  onChange={() => handlePackageSelect(item.label)}
                />
                <span>
                  {item.label} | <small>{item.duration}</small>
                </span>
              </label>
            ))}
          </fieldset>

          <div className="input-holder textarea-holder">
            <label htmlFor="message">
              ANYTHING ELSE YOU'D LIKE US TO KNOW?
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Share your vision, timeline, or any details that would be helpful"
              value={input.message}
              onChange={handleInput}
            />
          </div>
          <button
            type="submit"
            className={`contact-form-btn ${success ? "contact-form-btn-success" : ""}`}
            disabled={loading}
          >
            {loading ? (
              "Submitting..."
            ) : success ? (
              <>
                <FaCheck /> Sent!
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
