import { useEffect, useState } from "react";
import { Testimonial } from "../../assets/images";
import { useLitratoStore } from "../../store/litratoStore";

const defaultReview = {
  comment:
    "We booked them for our company holiday party and they exceeded every expectation. Professional, stylish, and so much fun",
  clientname: "Daniel R.",
};

const TestSection = () => {
  const publicReviews = useLitratoStore((state) => state.publicReviews) || [];
  const fetchPublicReviews = useLitratoStore(
    (state) => state.fetchPublicReviews,
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (fetchPublicReviews) fetchPublicReviews();
  }, [fetchPublicReviews]);

  const displayReviews =
    publicReviews.length > 0 ? publicReviews : [defaultReview];

  const handlePrevious = () => {
    setActiveIndex((prev) =>
      prev === 0 ? displayReviews.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === displayReviews.length - 1 ? 0 : prev + 1,
    );
  };

  const current = displayReviews[activeIndex];

  return (
    <section className="test">
      <div className="test-holder">
        <div className="test-left-side">
          <div className="test-text-holder">
            <div className="headings">
              <span>testimonials</span>
              <h2>What Our Clients Say</h2>
              <p>&ldquo;{current.comment}&rdquo;</p>
            </div>

            <div className="client-info">
              <p>— {current.clientname}</p>

              <div className="test-btn-holder">
                <button onClick={handlePrevious}>PREVIOUS</button> /
                <button onClick={handleNext}>NEXT</button>
              </div>
            </div>
          </div>
        </div>

        <div className="test-right-side">
          <div className="test-right-side-text">
            <Testimonial className="test-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestSection;
