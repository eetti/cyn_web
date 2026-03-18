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

const featureCards = [
  {
    variant: "vision",
    eyebrow: "Our Vision",
    title: "Reach the nations of the world with the gospel through church planting.",
    meta: "Matthew 28:18-20",
    copy: "A place where everyone can worship, grow, and be sent.",
    image: "https://www.figma.com/api/mcp/asset/c0816dd9-9e6c-48c0-9075-04a9c9b1224b",
  },
  {
    variant: "mission",
    eyebrow: "Our Mission",
    title: "Raising Disciples of Jesus Christ",
    meta: "Winning the lost. Consolidating believers. Empowering people.",
    copy:
      "All Nations Full Gospel Church is a caring global ministry of believers, raising disciples of Jesus Christ and helping people reach their God-given potential.",
    image: "https://www.figma.com/api/mcp/asset/a3b39e69-776a-4a27-9c34-28b9b10604d2",
  },
  {
    variant: "focus",
    eyebrow: "Pray, Learn, Serve. Join Us.",
    title: "Pray. Learn. Serve. Join Us.",
    meta:
      "Daily morning prayers, Friday night encounters, Bible studies, and practical service.",
    copy:
      "Members serve in music, ushering, media, children's ministry, and hospitality while the whole church grows together in the Word.",
    image: "https://www.figma.com/api/mcp/asset/731557f3-27c4-4af4-a714-38bcd5c53429",
  },
  {
    variant: "easter",
    eyebrow: "He Is Risen!",
    title: "Join Us For Easter",
    meta: "Soaring With The Spirit · January 1-12",
    copy:
      "Stream sermons online and join the twelve-day prayer program focused on spiritual renewal and direction.",
    image: "https://www.figma.com/api/mcp/asset/e2cdfc57-0b35-4129-bd34-959ec88b330e",
  },
];

const bannerImage =
  "https://www.figma.com/api/mcp/asset/d7fc071e-9dc4-452e-acb4-5557390f34ab";

const easterRows = [
  {
    day: "April 1-3",
    title: "3 Nights Of Healing",
    copy:
      "Join us for three powerful nights dedicated to prayer, worship, and healing. Come expecting God to move as we seek His presence and believe for restoration spiritually, emotionally, and physically. These evenings are designed to strengthen faith, bring hope, and create space for personal encounters with God.",
    image: "https://www.figma.com/api/mcp/asset/121a5151-00a6-4e7c-a89d-ec9843405b06",
  },
  {
    day: "April 3 10AM",
    title: "Good Friday",
    copy:
      "Good Friday is a sacred moment where we remember the sacrifice of Jesus Christ on the cross. Through worship, reflection, and the Word, we honor the price that was paid for our redemption and celebrate the love that changed the world.",
    image: "https://www.figma.com/api/mcp/asset/297a90f1-835d-456f-be0c-874ea3d90c17",
  },
  {
    day: "April 5",
    title: "Easter Sunday",
    copy:
      "Celebrate the joy of the resurrection with us! Easter Sunday is a powerful reminder that Jesus conquered death and brings new life to all who believe. Join us for a vibrant service filled with worship, hope, and the message of resurrection power.",
    image: "https://www.figma.com/api/mcp/asset/b73e7116-4609-4c59-91a9-8ab6a71c5c4e",
  },
  {
    day: "April 5",
    title: "ALIVE Concert II",
    copy:
      "Experience a powerful night of music, drama, and storytelling as the Easter story comes to life on stage. ALIVE is an unforgettable production that captures the moment history changed forever, the resurrection of Jesus. Come and witness the night that changed everything.",
    image: "https://www.figma.com/api/mcp/asset/8340502a-ebb8-45f5-a4e4-524e2af6784a",
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
        <div className="hero__title">
          <p className="hero__kicker">All Nations Full Gospel Church Ottawa</p>
          <h1>
            ALL NATIONS
            <br />
            -OTTAWA
          </h1>
        </div>

        <div className="hero__intro">
          <p className="hero__headline">A place where you will feel loved and welcomed.</p>
          <p>
            We welcome you to join us as we worship, grow in God&apos;s Word,
            and serve together. There&apos;s a place for you in the family of All
            Nations Full Gospel Church Ottawa.
          </p>
        </div>
      </section>

      <section className="feature-grid" id="ministries">
        {featureCards.map((card) => (
          <article className={`feature-card feature-card--${card.variant}`} key={card.title}>
            <div className="feature-card__image">
              <img src={card.image} alt="" />
            </div>
            <div className="feature-card__content">
              <p className="feature-card__eyebrow">{card.eyebrow}</p>
              <h2>{card.title}</h2>
              <p className="feature-card__meta">{card.meta}</p>
              <p className="feature-card__copy">{card.copy}</p>
            </div>
          </article>
        ))}
      </section>

      <section
        className="palm-banner"
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(rgba(18, 44, 15, 0.18), rgba(18, 44, 15, 0.18)), url(${bannerImage})`,
        }}
      />

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
            <a href="#easter-week">Services</a>
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
