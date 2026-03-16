const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Giving", href: "#giving" },
  { label: "Ministries", href: "#ministries" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#footer" },
];

const storyCards = [
  {
    size: "small",
    eyebrow: "Our Vision",
    title: "Reach the nations of the world with the gospel through church planting.",
    meta: "Matthew 28:18-20",
    copy: "A place where everyone can worship, grow, and be sent.",
    image: "https://www.figma.com/api/mcp/asset/796aefa3-cc24-44b1-90fe-6baa211cb713",
  },
  {
    size: "large",
    eyebrow: "Our Mission",
    title: "Raising Disciples of Jesus Christ",
    meta: "Winning the lost. Consolidating believers. Empowering people.",
    copy:
      "All Nations Full Gospel Church is a caring global ministry of believers, raising disciples of Jesus Christ and helping people reach their God-given potential.",
    image: "https://www.figma.com/api/mcp/asset/b1ef1a31-4cd2-4686-8988-85c11226ac4f",
  },
  {
    size: "large",
    eyebrow: "Core Church Focus",
    title: "Pray. Learn. Serve. Join Us.",
    meta: "Daily morning prayers, Friday night encounters, Bible studies, and practical service.",
    copy:
      "Members serve in music, ushering, media, children's ministry, and hospitality while the whole church grows together in the Word.",
    image: "https://www.figma.com/api/mcp/asset/3cfd2eb0-20f4-45b3-9e61-0fc39f174c3e",
  },
  {
    size: "small",
    eyebrow: "Latest Message And Event",
    title: "Enlargement Through Service II",
    meta: "Soaring With The Spirit · January 1 - January 12",
    copy:
      "Stream sermons online and join the twelve-day prayer program focused on spiritual renewal and direction.",
    image: "https://www.figma.com/api/mcp/asset/646a71bc-2f4c-4343-af59-48cb10c69d97",
  },
];

const weeklyRhythms = [
  {
    day: "Wednesday",
    title: "Bible Study",
    detail:
      "6:30-8:30 PM · Join Bible studies, teachings, and messages that strengthen faith and equip believers.",
    image: "https://www.figma.com/api/mcp/asset/658559fb-d446-4f7a-bc00-6086006f2800",
  },
  {
    day: "Friday",
    title: "Night Prayers",
    detail:
      "9:00 PM · Gather for Friday night encounters and monthly prayer sessions as a house of prayer for all nations.",
    image: "https://www.figma.com/api/mcp/asset/ef8b9a4d-809c-4200-b53b-beec7d98fbf6",
  },
  {
    day: "Sunday",
    title: "Celebration + Connect Service",
    detail:
      "9:00-11:00 AM and 11:30 AM-1:30 PM · A spiritual family where everyone feels loved, welcomed, and accepted.",
    image: "https://www.figma.com/api/mcp/asset/4d7ec4c1-1dc5-447f-8ea7-bcf545e9fdbd",
  },
  {
    day: "Sunday",
    title: "Evening Service + Church Planting Vision",
    detail:
      "6:30-8:30 PM · Worship, leadership training, and a mandate to keep expanding through new churches globally.",
    image: "https://www.figma.com/api/mcp/asset/a12440a9-1861-45c1-84e5-8e3503a0f943",
  },
];

const ministryColumns = [
  {
    title: "Ways To Give",
    links: ["Pushpay App", "Online Giving", "Church Website Giving Link"],
  },
  {
    title: "Main Ministries",
    links: ["Music Ministry", "Media Ministry", "Kingdom Explorers", "Hospitality"],
  },
  {
    title: "Leadership",
    links: [
      "Drs. Samuel & Rose Donkor",
      "Rev. Dr. Ebenezer & Pastor Tosan Asamany",
      "Pastor Chike & Gucci Agbasi",
    ],
  },
  {
    title: "Contact",
    links: [
      "1190 Newmarket St",
      "Ottawa, ON K1B 4L1",
      "+1 (613) 748-7070",
      "info@anfgcottawa.org",
    ],
  },
];

const footerLinks = ["Facebook", "Instagram", "YouTube"];

export default function Home() {
  return (
    <main className="editorial-site">
      <nav className="editorial-nav" id="home" aria-label="Primary">
        <a className="editorial-nav__brand" href="#home">
          ANFGC Ottawa
        </a>
        <div className="editorial-nav__links">
          {navLinks.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
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

      <section className="story-grid" id="ministries">
        {storyCards.map((card, index) => (
          <article
            className={`story-card story-card--${card.size} story-card--${index + 1}`}
            key={card.title}
          >
            <div className="story-card__image">
              <img src={card.image} alt="" />
            </div>
            <div className="story-card__content">
              <p className="story-card__eyebrow">{card.eyebrow}</p>
              <h2>{card.title}</h2>
              <p className="story-card__meta">{card.meta}</p>
              <p className="story-card__copy">{card.copy}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="schedule" aria-labelledby="weekly-rhythms">
        <h2 className="schedule__heading" id="weekly-rhythms">
          WEEKLY RHYTHMS
        </h2>

        <div className="schedule__rows">
          {weeklyRhythms.map((item) => (
            <article className="schedule-row" key={`${item.day}-${item.title}`}>
              <div className="schedule-row__day">{item.day}</div>
              <div className="schedule-row__content">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
              <div className="schedule-row__image">
                <img src={item.image} alt="" />
              </div>
            </article>
          ))}
        </div>

        <a className="schedule__cta" href="#giving">
          Ways To Give
        </a>
      </section>

      <footer className="site-footer" id="footer">
        <div className="site-footer__top">
          <a className="site-footer__brand" href="#home">
            All Nations
          </a>
          <div className="site-footer__top-links">
            <a href="#weekly-rhythms">Services</a>
            <a href="#about">About</a>
            <a href="#footer">Find Us</a>
          </div>
        </div>

        <div className="site-footer__columns" id="giving">
          {ministryColumns.map((column) => (
            <section key={column.title}>
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="site-footer__bottom">
          <div className="site-footer__social">
            {footerLinks.map((link) => (
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
