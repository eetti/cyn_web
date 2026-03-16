const headerLinks = [
  { label: "About", href: "#quote" },
  { label: "Location", href: "#footer" },
  { label: "Get Involved", href: "#kids" },
];

const serviceTimes = ["8:00AM", "9:30AM", "11:30AM"];

const footerUtilityLinks = ["Sermons", "About", "Locations", "Get Involved", "Giving"];

const footerColumns = [
  {
    title: "About",
    links: ["Beliefs", "Values", "Pastors"],
  },
  {
    title: "Media",
    links: ["Sermons", "App"],
  },
  {
    title: "Ministries",
    links: ["Small Groups", "Serving Teams", "Kids", "Teens"],
  },
  {
    title: "More",
    links: ["Internships", "Events", "Contact"],
  },
];

const heroBackground =
  "https://www.figma.com/api/mcp/asset/c3b21007-72b2-468d-967b-d6edcfcb1a86";
const menuIcon =
  "https://www.figma.com/api/mcp/asset/a415d96a-95fd-440a-8b0b-32ab12c3a04b";
const serviceTexture =
  "https://www.figma.com/api/mcp/asset/bdadf3df-65cf-4dfe-9a82-11a09b182675";
const floralTexture =
  "https://www.figma.com/api/mcp/asset/510be9c2-0456-410c-b046-08e60595cd6c";
const footerTopTexture =
  "https://www.figma.com/api/mcp/asset/3a9e3d47-699c-4ae6-ad86-d8802b62f611";
const footerTexture =
  "https://www.figma.com/api/mcp/asset/a54e63d6-6dcf-4672-a171-f99ad6daa13b";
const instagramIcon =
  "https://www.figma.com/api/mcp/asset/49d63b38-aa79-4b45-a182-39a34c0de677";
const facebookIcon =
  "https://www.figma.com/api/mcp/asset/be5bc236-2fc0-4d30-9f6e-963062d26381";
const youtubeIcon =
  "https://www.figma.com/api/mcp/asset/7b90b33d-9eef-49fd-9aac-9add9d991bc4";

export default function Home() {
  return (
    <main className="figma-page">
      <header className="site-header">
        <div className="site-header__spacer" aria-hidden="true" />
        <nav className="site-header__nav" aria-label="Primary">
          {headerLinks.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </nav>
        <button className="site-header__menu" type="button" aria-label="Menu">
          <span>Menu</span>
          <img src={menuIcon} alt="" />
        </button>
      </header>

      <section
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.78), rgba(0, 0, 0, 0.94)), url(${heroBackground})`,
        }}
      >
        <div className="hero-section__inner">
          <h1 className="hero-title">EASTER</h1>
          <p className="hero-subtitle">AT ANFGC OTTAWA</p>

          <div className="hero-actions">
            <a className="hero-button hero-button--light" href="#service-times">
              Register Today!
            </a>
            <a className="hero-button hero-button--dark" href="#service-times">
              Holy Week Schedule
            </a>
          </div>
        </div>
      </section>

      <section
        className="service-times"
        id="service-times"
        style={{
          backgroundImage: `linear-gradient(rgba(246, 244, 236, 0.94), rgba(246, 244, 236, 0.94)), url(${serviceTexture})`,
        }}
      >
        <h2>EASTER WEEKEND SERVICE TIMES</h2>
        <div className="service-times__pills">
          {serviceTimes.map((time) => (
            <span key={time}>{time}</span>
          ))}
        </div>
      </section>

      <section className="quote-section" id="quote">
        <div className="quote-section__haze quote-section__haze--left" />
        <div className="quote-section__haze quote-section__haze--right" />
        <div className="quote-section__deer" aria-hidden="true" />
        <div className="quote-section__leaves quote-section__leaves--left" />
        <div className="quote-section__leaves quote-section__leaves--right" />
        <p>
          THEN THOSE WHO WENT BEFORE AND THOSE WHO FOLLOWED CRIED OUT, SAYING:
          <br />
          &quot;HOSANNA! BLESSED IS HE WHO COMES IN THE NAME OF THE LORD!&quot;
        </p>
      </section>

      <section className="glitch-section" aria-hidden="true" />

      <section
        className="kids-section"
        id="kids"
        style={{
          backgroundImage: `linear-gradient(rgba(245, 242, 232, 0.92), rgba(245, 242, 232, 0.92)), url(${floralTexture})`,
        }}
      >
        <div className="kids-section__flower kids-section__flower--top" />
        <div className="kids-section__flower kids-section__flower--left" />
        <div className="kids-section__flower kids-section__flower--right" />
        <div className="kids-section__flower kids-section__flower--bottom" />
        <p>
          Creative Kids Easter is a fun, meaningful experience designed just for
          your kids. While you enjoy Easter service, your children will
          experience engaging activities, age-appropriate teaching, and a safe
          environment where they can learn the story of Easter in a way they
          understand and enjoy. From the moment they check in, our team is ready
          to help your kids feel welcomed, cared for, and excited to be part of
          Easter at Creative Church.
        </p>
      </section>

      <footer
        className="site-footer"
        id="footer"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.97), rgba(255, 255, 255, 0.97)), url(${footerTexture})`,
        }}
      >
        <div
          className="site-footer__topwash"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.86), rgba(255, 255, 255, 0.86)), url(${footerTopTexture})`,
          }}
          aria-hidden="true"
        />

        <nav className="site-footer__utility" aria-label="Footer utility">
          {footerUtilityLinks.map((link) => (
            <a href="#top" key={link}>
              {link}
            </a>
          ))}
        </nav>

        <div className="site-footer__social">
          <a href="#top" aria-label="Facebook">
            <img src={facebookIcon} alt="" />
          </a>
          <a href="#top" aria-label="Instagram">
            <img src={instagramIcon} alt="" />
          </a>
          <a href="#top" aria-label="YouTube">
            <img src={youtubeIcon} alt="" />
          </a>
        </div>

        <div className="site-footer__columns">
          {footerColumns.map((column) => (
            <section key={column.title}>
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#top">{link}</a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="site-footer__bar">
          <p>13000 63rd Avenue N, Maple Grove, MN 55369 | (763) 392-4383</p>
          <p>&copy; 2024 Creative Church. All Rights Reserved | Privacy Policy.</p>
        </div>
      </footer>
    </main>
  );
}
