const aboutUrl = "https://anfgcottawa.org/about-us/";
const givingUrl =
  "https://anfgcottawa.org/campaigns/help-families-today-with-critical-relief/";
const contactUrl = "https://anfgcottawa.org/contacts/";
const ministriesUrl = "https://anfgcottawa.org/ministries/";
const musicUrl = "https://anfgcottawa.org/ministry/music/";
const mediaUrl = "https://anfgcottawa.org/ministry/media/";
const kingdomExplorersUrl =
  "https://anfgcottawa.org/ministry/kingdom-explorers-kids/";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Giving", href: givingUrl },
  { label: "Ministries", href: ministriesUrl },
  { label: "About", href: aboutUrl },
  { label: "Contact", href: contactUrl },
];

const heroImage =
  "https://www.figma.com/api/mcp/asset/42bc3996-f5dc-44a6-b11b-fff9621e42ef";
const missionPosterImage =
  "https://www.figma.com/api/mcp/asset/571f97b0-594c-4088-875d-7f994d3dfda9";
const focusImage =
  "https://www.figma.com/api/mcp/asset/47663972-a707-4bf4-8c3f-92a98f24071a";
const easterInviteImage =
  "https://www.figma.com/api/mcp/asset/8309f3bd-822e-4d3f-9ace-1202e0e4b7fe";
const bannerImage =
  "https://www.figma.com/api/mcp/asset/3cf1b9dd-3d1d-4495-82fd-acec9f99677a";

const easterRows = [
  {
    day: "April 1-3",
    title: "3 Nights Of Healing",
    copy:
      "Join us for three powerful nights dedicated to prayer, worship, and healing. Come expecting God to move as we seek His presence and believe for restoration spiritually, emotionally, and physically. These evenings are designed to strengthen faith, bring hope, and create space for personal encounters with God.",
    image: "https://www.figma.com/api/mcp/asset/2cb2d9da-d8ee-4ab5-9483-a02bdb4280e3",
  },
  {
    day: "April 3 10AM",
    title: "Good Friday",
    copy:
      "Good Friday is a sacred moment where we remember the sacrifice of Jesus Christ on the cross. Through worship, reflection, and the Word, we honor the price that was paid for our redemption and celebrate the love that changed the world.",
    image: "https://www.figma.com/api/mcp/asset/aef37393-9e8d-4c10-9d30-5e810a32f13f",
  },
  {
    day: "April 5",
    title: "Easter Sunday",
    copy:
      "Celebrate the joy of the resurrection with us! Easter Sunday is a powerful reminder that Jesus conquered death and brings new life to all who believe. Join us for a vibrant service filled with worship, hope, and the message of resurrection power.",
    image: "https://www.figma.com/api/mcp/asset/c73857b6-7622-4806-8ff9-9d98520e613a",
  },
  {
    day: "April 5",
    title: "ALIVE Concert II",
    copy:
      "Experience a powerful night of music, drama, and storytelling as the Easter story comes to life on stage. ALIVE is an unforgettable production that captures the moment history changed forever, the resurrection of Jesus. Come and witness the night that changed everything.",
    image: "https://www.figma.com/api/mcp/asset/ff071c04-21a4-43aa-ae1f-427ffbeae2ab",
  },
];

const footerColumns = [
  {
    title: "Ways To Give",
    href: givingUrl,
    links: [
      { label: "Pushpay App", href: givingUrl },
      { label: "Online Giving", href: givingUrl },
      { label: "Church Website Giving Link", href: givingUrl },
    ],
  },
  {
    title: "Main Ministries",
    href: ministriesUrl,
    links: [
      { label: "Music Ministry", href: musicUrl },
      { label: "Media Ministry", href: mediaUrl },
      { label: "Kingdom Explorers", href: kingdomExplorersUrl },
      { label: "Hospitality", href: ministriesUrl },
    ],
  },
  {
    title: "Leadership",
    href: aboutUrl,
    links: [
      { label: "Drs. Samuel & Rose Donkor", href: aboutUrl },
      { label: "Rev. Dr. Ebenezer & Pastor Tosan Asamany", href: aboutUrl },
      { label: "Pastor Chike & Gucci Agbasi", href: aboutUrl },
    ],
  },
  {
    title: "Contact",
    href: contactUrl,
    links: [
      { label: "1190 Newmarket St", href: contactUrl },
      { label: "Ottawa, ON K1B 4L1", href: contactUrl },
      { label: "+1 (613) 748-7070", href: contactUrl },
      { label: "info@anfgcottawa.org", href: contactUrl },
    ],
  },
];

const socialLinks = ["Facebook", "Instagram", "YouTube"];

export default function Home() {
  return (
    <main className="easter-site">
      <nav className="site-nav" id="home" aria-label="Primary">
        <a className="site-nav__brand" href="#home">
          ANFGC Ottawa
        </a>

        <div className="site-nav__actions">
          <div className="site-nav__links">
            {navLinks.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </div>

          <details className="site-drawer">
            <summary className="site-drawer__toggle">
              <span>Menu</span>
              <span className="site-drawer__bars" aria-hidden="true" />
            </summary>

            <div className="site-drawer__overlay" aria-hidden="true" />

            <div className="site-drawer__panel">
              <p className="site-drawer__eyebrow">Navigate</p>
              <nav className="site-drawer__links" aria-label="Mobile primary">
                {navLinks.map((link) => (
                  <a href={link.href} key={link.label}>
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="site-drawer__meta">
                <p>1190 Newmarket St, Ottawa, ON K1B 4L1</p>
                <p>+1 (613) 748-7070</p>
                <p>info@anfgcottawa.org</p>
              </div>
            </div>
          </details>
        </div>
      </nav>

      <section className="hero" id="about">
        <h1 className="hero__title">All Nations Ottawa</h1>

        <div className="hero__mosaic">
          <article className="vision-card">
            <div className="vision-card__image">
              <img src={heroImage} alt="" />
            </div>
            <div className="vision-card__content">
              <p className="vision-card__eyebrow">Our Vision</p>
              <h2>
                Reach the nations of the world with the gospel through church
                planting.
              </h2>
              <p className="vision-card__meta">Matthew 28:18-20</p>
              <p className="vision-card__copy">
                A place where everyone can worship, grow, and be sent.
              </p>
            </div>
          </article>

          <div className="hero__intro">
            <p className="hero__headline">
              A place where you will feel loved and welcomed.
            </p>
            <p>
              We welcome you to join us as we worship, grow in God&apos;s Word,
              and serve together. There&apos;s a place for you in the family of
              All Nations Full Gospel Church Ottawa.
            </p>
          </div>

          <article className="mission-card">
            <div className="mission-card__image">
              <img src={missionPosterImage} alt="" />
            </div>
            <div className="mission-card__content">
              <p className="mission-card__eyebrow">Our Mission</p>
              <h2>Raising Disciples of Jesus Christ</h2>
              <p className="mission-card__meta">
                Winning the lost. Consolidating believers. Empowering people.
              </p>
            </div>
          </article>

          <div className="risen-label">He Is Risen!</div>

          <article className="focus-card" id="ministries">
            <div className="focus-card__image">
              <img src={focusImage} alt="" />
            </div>
            <div className="focus-card__content">
              <p className="focus-card__eyebrow">Core Church Focus</p>
              <h2>Pray. Learn. Serve. Join Us.</h2>
              <p className="focus-card__meta">
                Daily morning prayers, Friday night encounters, Bible studies,
                and practical service.
              </p>
              <p className="focus-card__copy">
                Members serve in music, ushering, media, children&apos;s ministry,
                and hospitality while the whole church grows together in the
                Word.
              </p>
            </div>
          </article>

          <article className="easter-card">
            <div className="easter-card__image">
              <img src={easterInviteImage} alt="" />
            </div>
            <div className="easter-card__content">
              <h2>Join Us For Easter</h2>
            </div>
          </article>
        </div>
      </section>

      <section className="palm-banner" aria-hidden="true">
        <img src={bannerImage} alt="" />
      </section>

      <section className="schedule" aria-labelledby="easter-week">
        <h2 className="schedule__heading" id="easter-week">
          Easter At ANFGC Ottawa
        </h2>

        <div className="schedule__rows">
          {easterRows.map((row) => (
            <article className="schedule-row" key={`${row.day}-${row.title}`}>
              <div className="schedule-row__day">{row.day}</div>
              <div className="schedule-row__content">
                <h3>{row.title}</h3>
                <p>{row.copy}</p>
              </div>
              <div className="schedule-row__image">
                <img src={row.image} alt="" />
              </div>
            </article>
          ))}
        </div>

        <a className="schedule__cta" href={givingUrl}>
          Ways To Give
        </a>
      </section>

      <footer className="site-footer" id="footer">
        <div className="site-footer__top">
          <a className="site-footer__brand" href="#home">
            All Nations
          </a>
          <div className="site-footer__top-links">
            <a href={aboutUrl}>About</a>
            <a href={contactUrl}>Find Us</a>
          </div>
        </div>

        <div className="site-footer__columns" id="giving">
          {footerColumns.map((column) => (
            <section key={column.title}>
              <h3>
                {column.href ? <a href={column.href}>{column.title}</a> : column.title}
              </h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="site-footer__bottom">
          <div className="site-footer__social">
            {socialLinks.map((link) => (
              <a href="#footer" key={link}>
                {link}
              </a>
            ))}
          </div>
          <p>
            All Nations Full Gospel Church Ottawa | A caring community raising
            disciples of Jesus Christ
          </p>
        </div>
      </footer>
    </main>
  );
}
