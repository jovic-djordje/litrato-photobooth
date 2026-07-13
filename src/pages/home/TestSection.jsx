import { Testimonial } from "../../assets/images";

const TestSection = () => {
  return (
    <section className="test">
      <div className="test-holder">
        <div className="test-left-side">
          <div className="test-text-holder">
            <div className="headings">
              <h4>testimonials</h4>
              <h2>What Our Clients Say</h2>
              <p>
                {" "}
                “We booked them for our company holiday party and they exceeded
                every expectation. Professional, stylish, and so much fun“
              </p>
            </div>

            <div className="client-info">
              <p>— Daniel R.</p>
              <div className="test-btn-holder">
                <button>PREVIOUS</button> /<button>NEXT</button>
              </div>
            </div>
          </div>
        </div>

        <div className="test-right-side">
          <div className="test-right-side-text">
            {/*<h4>moments worth keeping</h4>*/}
            <Testimonial className="test-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestSection;
