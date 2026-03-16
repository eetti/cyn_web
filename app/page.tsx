const navigationLinks = [
  "Home",
  "Giving",
  "Ways To Give",
  "Ministries",
  "Music",
  "Media",
  "All Ministries",
  "More About Us",
  "About Us",
  "Contact Us",
];

const focusAreas = [
  {
    title: "Pray",
    copy: "Join us in daily morning prayers, Friday night encounters, and monthly prayer sessions.",
  },
  {
    title: "Learn",
    copy: "Grow through Bible studies, teachings, and messages that strengthen faith and equip believers.",
  },
  {
    title: "Serve",
    copy: "Members serve through music, ushering, media, children's ministry, and hospitality.",
  },
  {
    title: "Join Us",
    copy: "Everyone is welcome to worship, grow, and serve together in the church community.",
  },
];

const ministries = [
  {
    title: "Music Ministry",
    copy: "The Music Ministry helps prepare hearts to encounter God through praise and worship.",
    items: ["Singing", "Instruments", "Sound support", "Worship teams"],
  },
  {
    title: "Media Ministry",
    copy: "The media team spreads the gospel beyond the church walls using sound, video, photography, and broadcast media.",
    items: ["Sound", "Video", "Photography", "Broadcast media"],
  },
  {
    title: "Kingdom Explorers",
    copy: "A children's ministry dedicated to nurturing kids in the knowledge and love of Jesus Christ.",
    items: ["Age-appropriate teaching", "Activities", "Faith formation", "Safe care"],
  },
];

const leadership = [
  "Drs. Samuel & Rose Donkor — Senior Pastors & Founders",
  "Rev. Dr. Ebenezer & Pastor Tosan Asamany — Resident Pastors, ANFGC Ottawa",
  "Pastor Chike & Gucci Agbasi — Pastors, Connect Ottawa",
];

const mandates = [
  "Creating a Spiritual Family",
  "Providing a Place of Worship",
  "A House of Prayer",
  "Raising Leaders",
  "Church Planting",
];

const services = [
  {
    day: "Wednesday",
    items: ["Bible Study — 6:30–8:30 PM"],
  },
  {
    day: "Friday",
    items: ["Night Prayers — 9:00 PM"],
  },
  {
    day: "Sunday",
    items: [
      "Celebration Service — 9:00–11:00 AM",
      "Connect Service — 11:30 AM–1:30 PM",
      "Evening Service — 6:30–8:30 PM",
    ],
  },
];

const footerLinks = ["Facebook", "Instagram", "YouTube"];

export default function Home() {
  return (
    <main className="site-shell" id="top">
      <header className="hero">
        <div className="hero__glow hero__glow--left" />
        <div className="hero__glow hero__glow--right" />
        <div className="hero__beam hero__beam--coral" />
        <div className="hero__beam hero__beam--amber" />

        <nav className="topbar" aria-label="Primary">
          <span className="topbar__brand">All Nations Full Gospel Church Ottawa</span>
          <div className="topbar__links">
            {navigationLinks.map((link) => (
              <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`} key={link}>
                {link}
              </a>
            ))}
          </div>
        </nav>

        <section className="hero__content" id="home">
          <p className="eyebrow">Welcome Home</p>
          <h1>A place where you will feel loved and welcomed.</h1>
          <p className="hero__subhead">
            We welcome you to join us as we worship, grow in God&apos;s Word, and
            serve together. There&apos;s a place for you in the family of All
            Nations Full Gospel Church Ottawa.
          </p>
          <div className="hero__actions">
            <a className="pill pill--solid" href="#service-schedule">
              Join Us This Week
            </a>
            <a className="pill pill--ghost" href="#ways-to-give">
              Ways To Give
            </a>
          </div>
        </section>

        <section className="hero__card">
          <div>
            <span className="hero__card-label">Our Vision</span>
            <strong>
              To reach the nations of the world with the gospel through church
              planting.
            </strong>
            <p>Matthew 28:18-20</p>
          </div>
          <div>
            <span className="hero__card-label">Our Mission</span>
            <strong>Raising Disciples of Jesus Christ</strong>
            <p>
              We are a caring global ministry of believers, equipping people to
              reach their God-given potential.
            </p>
          </div>
        </section>
      </header>

      <section className="panel panel--cream" id="more-about-us">
        <div className="section-heading">
          <span className="section-heading__badge">Vision And Mission</span>
          <h2>Raising disciples and reaching the nations</h2>
        </div>

        <div className="split-grid">
          <article className="info-card">
            <h3>Our Vision</h3>
            <p>
              To reach the nations of the world with the gospel through church
              planting.
            </p>
            <p className="muted-copy">(Matthew 28:18-20)</p>
          </article>

          <article className="info-card">
            <h3>Our Mission</h3>
            <p>
              All Nations Full Gospel Church is a global ministry with a mandate
              to be a caring community of believers, raising disciples of Jesus
              Christ.
            </p>
            <ul className="mini-list mini-list--dark">
              <li>Winning the lost</li>
              <li>Consolidating believers</li>
              <li>Empowering people to reach their God-given potential</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="panel panel--navy" id="ministries">
        <div className="section-heading section-heading--light">
          <span className="section-heading__badge">Core Church Focus</span>
          <h2>Worship, grow, and serve together</h2>
        </div>

        <div className="card-grid card-grid--four">
          {focusAreas.map((area) => (
            <article className="feature-card feature-card--blue" key={area.title}>
              <div>
                <p className="feature-card__kicker">Church Life</p>
                <h3>{area.title}</h3>
              </div>
              <p>{area.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel panel--sky" id="all-ministries">
        <div className="section-heading">
          <span className="section-heading__badge">Main Ministries</span>
          <h2>Serve with your gifts</h2>
        </div>

        <div className="card-grid">
          {ministries.map((ministry) => (
            <article className="info-card info-card--sky" key={ministry.title}>
              <h3>{ministry.title}</h3>
              <p>{ministry.copy}</p>
              <ul className="mini-list mini-list--dark">
                {ministry.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="panel panel--cream" id="media">
        <div className="section-heading">
          <span className="section-heading__badge">Latest Sermon And Events</span>
          <h2>What is happening now</h2>
        </div>

        <div className="split-grid">
          <article className="promo-card promo-card--warm">
            <strong>Latest Sermon</strong>
            <span>Enlargement Through Service II</span>
            <p>Users can stream sermons online and revisit teachings anytime.</p>
          </article>

          <article className="promo-card promo-card--deep">
            <strong>Featured Event</strong>
            <span>Soaring With The Spirit</span>
            <p>January 1 - January 12</p>
            <p>
              A twelve-day prayer program focused on spiritual renewal and
              direction, with daily prayer sessions aligned to calendar dates.
            </p>
          </article>
        </div>
      </section>

      <section className="panel panel--cream panel--soft" id="about-us">
        <div className="section-heading">
          <span className="section-heading__badge">Leadership And Mandate</span>
          <h2>Guided by spiritual family and church planting</h2>
        </div>

        <div className="split-grid">
          <article className="info-card">
            <h3>Senior Leadership</h3>
            <ul className="stack-list">
              {leadership.map((leader) => (
                <li key={leader}>{leader}</li>
              ))}
            </ul>
          </article>

          <article className="info-card">
            <h3>Core Mandate</h3>
            <ul className="stack-list">
              {mandates.map((mandate) => (
                <li key={mandate}>{mandate}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="panel panel--deep" id="service-schedule">
        <div className="section-heading section-heading--light">
          <span className="section-heading__badge section-heading__badge--sky">
            Service Schedule
          </span>
          <h2>Weekly worship rhythm</h2>
        </div>

        <div className="split-grid split-grid--tight">
          <article className="feature-card feature-card--blue">
            <div>
              <p className="feature-card__kicker">Weekly Services</p>
              <h3>Gather with us</h3>
            </div>
            <div className="schedule-list">
              {services.map((service) => (
                <div key={service.day}>
                  <strong>{service.day}</strong>
                  <ul className="mini-list">
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>

          <article className="feature-card feature-card--orange" id="ways-to-give">
            <div>
              <p className="feature-card__kicker">Giving And Contact</p>
              <h3>Stay connected</h3>
            </div>
            <ul className="stack-list stack-list--light">
              <li>Pushpay App</li>
              <li>Online giving through the church website</li>
              <li>1190 Newmarket St, Ottawa, ON K1B 4L1</li>
              <li>+1 (613) 748-7070</li>
              <li>info@anfgcottawa.org</li>
            </ul>
          </article>
        </div>
      </section>

      <footer className="footer" id="contact-us">
        <div className="footer__content">
          <div>
            <p className="footer__eyebrow">All Nations Full Gospel Church Ottawa</p>
            <h2>Worship, grow, and serve with us.</h2>
          </div>
          <div className="footer__links">
            {footerLinks.map((link) => (
              <a href={`#${link.toLowerCase()}`} key={link}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
