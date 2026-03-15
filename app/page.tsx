const menuIcon = "https://www.figma.com/api/mcp/asset/4f714d3c-eba4-4e12-bbe5-5150ad2b7b08";
const heroTexture =
  "https://www.figma.com/api/mcp/asset/653cb9b5-52af-4b62-ae95-f8dacc1bec7b";
const serviceTexture =
  "https://www.figma.com/api/mcp/asset/0dd1539d-b6c4-43fe-b80f-62295e378eff";
const floralTexture =
  "https://www.figma.com/api/mcp/asset/7b3215f0-251e-4072-96eb-1e5e4dbc4c93";
const footerTexture =
  "https://www.figma.com/api/mcp/asset/295db533-60ca-4b0c-9e03-809b6c81049e";
const footerPanelTexture =
  "https://www.figma.com/api/mcp/asset/12233db4-6ed8-4cce-ad36-8a4f9fd752e9";
const instagramIcon =
  "https://www.figma.com/api/mcp/asset/e224dc84-3aa9-495f-9100-4c7e3e233064";
const facebookIcon =
  "https://www.figma.com/api/mcp/asset/6172051e-0351-4d6f-81bc-ea52fc8469b5";
const youtubeIcon =
  "https://www.figma.com/api/mcp/asset/d47a6fd6-4b89-45a7-b1f6-ffd22284330c";

const navLinks = ["About", "Location", "Get Involved"];
const serviceTimes = ["8:00AM", "9:30AM", "11:30AM"];

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

const footerUtilityLinks = ["Sermons", "About", "Locations", "Get Involved", "Giving"];

export default function Home() {
  return (
    <main className="church-page">
      <header className="site-header" data-node-id="20:3">
        <nav className="site-nav" aria-label="Primary">
          <div className="site-nav__spacer" aria-hidden="true" />
          <div className="site-nav__links">
            {navLinks.map((link) => (
              <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`} key={link}>
                {link}
              </a>
            ))}
          </div>
          <button className="site-nav__menu" type="button" aria-label="Open menu">
            <span>Menu</span>
            <img alt="" src={menuIcon} />
          </button>
        </nav>
      </header>

      <section
        className="hero-panel"
        data-node-id="20:27"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.985), rgba(0, 0, 0, 0.985)), url("${heroTexture}")`,
        }}
      >
        <div className="hero-panel__inner">
          <h1 className="hero-panel__title" aria-label="Easter at ANFGC Ottawa">
            <span className="hero-panel__word hero-panel__word--gradient">EASTER</span>
            <span className="hero-panel__subtitle">AT ANFGC OTTAWA</span>
          </h1>

          <div className="hero-panel__actions">
            <a className="hero-button hero-button--solid" href="#service-times">
              Register Today!
            </a>
            <a className="hero-button hero-button--ghost" href="#service-times">
              Holy Week Schedule
            </a>
          </div>
        </div>
      </section>

      <section
        className="service-times"
        data-node-id="20:34"
        id="service-times"
        style={{
          backgroundImage: `url("${serviceTexture}")`,
        }}
      >
        <h2>Easter Weekend Service Times</h2>
        <div className="service-times__chips">
          {serviceTimes.map((time) => (
            <span className="service-chip" key={time}>
              {time}
            </span>
          ))}
        </div>
      </section>

      <div className="white-spacer" data-node-id="20:43" />

      <section className="verse-panel" data-node-id="20:46">
        <div className="verse-panel__backdrop" aria-hidden="true">
          <div className="verse-panel__shape verse-panel__shape--left" />
          <div className="verse-panel__shape verse-panel__shape--right" />
          <div className="verse-panel__shape verse-panel__shape--center" />
        </div>
        <blockquote className="verse-panel__quote">
          Then those who went before and those who followed cried out, saying:
          <br />
          &quot;Hosanna! Blessed is he who comes in the name of the Lord!&quot;
        </blockquote>
      </section>

      <section className="glitch-panel" data-node-id="40:10" aria-hidden="true">
        <div className="glitch-panel__layer glitch-panel__layer--one" />
        <div className="glitch-panel__layer glitch-panel__layer--two" />
        <div className="glitch-panel__layer glitch-panel__layer--three" />
      </section>

      <section
        className="kids-panel"
        data-node-id="40:14"
        style={{
          backgroundImage: `url("${floralTexture}")`,
        }}
      >
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

      <footer className="site-footer" data-node-id="20:61">
        <div
          className="site-footer__utility"
          style={{ backgroundImage: `url("${footerTexture}")` }}
        >
          {footerUtilityLinks.map((link) => (
            <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`} key={link}>
              {link}
            </a>
          ))}
        </div>

        <div
          className="site-footer__main"
          style={{ backgroundImage: `url("${footerPanelTexture}")` }}
        >
          <div className="site-footer__socials" aria-label="Social media">
            <a href="#" aria-label="Instagram">
              <img alt="" src={instagramIcon} />
            </a>
            <a href="#" aria-label="Facebook">
              <img alt="" src={facebookIcon} />
            </a>
            <a href="#" aria-label="YouTube">
              <img alt="" src={youtubeIcon} />
            </a>
          </div>

          <div className="site-footer__columns">
            {footerColumns.map((column) => (
              <section key={column.title}>
                <h3>{column.title}</h3>
                <ul>
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>

        <div
          className="site-footer__bar"
          style={{
            backgroundImage: `linear-gradient(202deg, rgb(228, 65, 43) 0%, rgb(247, 148, 30) 100%), url("${footerTexture}")`,
          }}
        >
          <p>13000 63rd Avenue N, Maple Grove, MN 55369 | (763) 392-4383</p>
          <p>
            &copy; 2024 Creative Church. All Rights Reserved |{" "}
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </footer>
    </main>
  );
}
