import { LogoOne, LogoTwo } from "../../assets/images";

const LogoBanner = () => {
  const baseLogos = [
    { id: 1, icon: <LogoOne className="banner-logo" /> },
    { id: 2, icon: <LogoTwo className="banner-logo-st" /> },
  ];

  const repeatedLogos = Array.from({ length: 8 }, (_, repeatIndex) =>
    baseLogos.map((logo) => ({
      ...logo,
      uniqueId: `${repeatIndex}-${logo.id}`,
    })),
  ).flat();

  return (
    <section className="logo-section">
      <h2>Proud to Have Worked With</h2>

      <div className="logo-viewport">
        <div className="logo-holder">
          <div className="banner-strip">
            {repeatedLogos.map((logo) => (
              <div className="banner-logo-item" key={`main-${logo.uniqueId}`}>
                {logo.icon}
              </div>
            ))}
          </div>

          <div className="banner-strip" aria-hidden="true">
            {repeatedLogos.map((logo) => (
              <div className="banner-logo-item" key={`copy-${logo.uniqueId}`}>
                {logo.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoBanner;
