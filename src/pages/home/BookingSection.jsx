import { useState } from "react";
import { Link } from "react-router-dom";
import { BookingImg } from "../../assets/images";

const steps = [
  {
    id: 1,
    step: "step 01.",
    title: "Inquire & Secure Your Date",
    text: "Send us your event details and we'll create a custom package just for you. To officially lock in your date, a signed agreement and retainer are required.",
    btn: "INQUIRE",
  },
  {
    id: 2,
    step: "step 02.",
    title: "Customize Your Experience",
    text: "As your event gets closer, we'll send over a short questionnaire so you can choose your photo layout, backdrop, and the overall feel of your booth experience. This is where we make everything feel personal and tailored to your celebration.",
  },
  {
    id: 3,
    step: "step 03.",
    title: "Show Up & Enjoy",
    text: "On the day of your event, we'll take care of everything from setup to the full booth experience. All you have to do is enjoy the moment, step in for photos, and have fun with your guests.",
  },
];

const BookingSection = ({ imageComponent: ImageComponent = BookingImg }) => {
  const [activeId, setActiveId] = useState(1);
  const active = steps.find((s) => s.id === activeId);

  return (
    <section className="test">
      <div className="test-holder booking-section-holder">
        <div className="test-right-side booking-left-side">
          <div className="test-right-side-text">
            {/*<h4>setting the scene</h4> */}
            <ImageComponent className="test-img" />
          </div>
        </div>

        <div className="test-left-side">
          <div className="test-text-holder">
            <div className="headings">
              <h4>process</h4>
              <h2>Your Booking Guide</h2>
            </div>

            <div className="booking-text-holder">
              <h4>{active.step}</h4>
              <h3>{active.title}</h3>
              <p>{active.text}</p>
              <Link to="/contact" className="link">
                <button
                  key={active.id}
                  className={`booking-btn ${activeId === 1 ? "booking-btn--active" : ""}`}
                >
                  {active.btn}
                </button>
              </Link>
            </div>

            <div className="test-btn-holder booking-btn-holder">
              <button
                onClick={() => {
                  if (activeId === 1) {
                    setActiveId(3);
                  } else {
                    setActiveId(activeId - 1);
                  }
                }}
              >
                PREVIOUS
              </button>{" "}
              /
              <button
                onClick={() => {
                  if (activeId === 3) {
                    setActiveId(1);
                  } else {
                    setActiveId(activeId + 1);
                  }
                }}
              >
                NEXT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
