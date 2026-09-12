import "./terms.style.css";

const Terms = () => {
  return (
    <section className="terms-section">
      <div className="terms-holder">
        <div className="terms-text-holder">
          <h1 className="terms-title">Terms & Conditions</h1>
          <p className="terms-intro">
            By using this website and booking services with Litrato Photobooth,
            you agree to the following terms.
          </p>

          <div className="terms-block">
            <h2>Content & Ownership</h2>
            <p>
              All content on this site, including text, photos, and graphics, is
              the property of Litrato Photobooth and may not be copied,
              reproduced, or used without prior written permission.
            </p>
          </div>

          <div className="terms-block">
            <h2>Bookings & Payment</h2>
            <p>
              All bookings are subject to availability and require a signed
              contract and non-refundable retainer to secure your date. The
              remaining balance is due as outlined in your service agreement.
            </p>
          </div>

          <div className="terms-block">
            <h2>Cancellations & Changes</h2>
            <p>
              Cancellations or date changes must be requested in writing. The
              retainer is non-refundable in the event of cancellation.
              Availability for date changes is not guaranteed and is subject to
              our current calendar.
            </p>
          </div>

          <div className="terms-block">
            <h2>Limitation of Liability</h2>
            <p>
              In the rare event that we are unable to fulfill our services due
              to circumstances beyond our control, our liability is limited to a
              refund not exceeding the amount you have paid. We are not
              responsible for delays or issues caused by venue restrictions,
              weather, or other factors outside our control.
            </p>
          </div>

          <div className="terms-block">
            <h2>External Links</h2>
            <p>
              This website may contain links to other websites. We are not
              responsible for the content or privacy practices of those
              third-party sites.
            </p>
          </div>

          <div className="terms-block">
            <h2>Governing Law</h2>
            <p>
              These terms are governed by the laws of the State of Colorado.
            </p>
          </div>

          <div className="terms-block">
            <h2>Contact</h2>
            <p>
              For any questions about these terms, please contact us at{" "}
              <a href="mailto:samantha@litratoco.com">samantha@litratoco.com</a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;
