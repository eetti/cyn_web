const artistCards = [
  { title: "Artist 2026", variant: "artist-card--question" },
  { title: "Salebarbes", variant: "artist-card--stage" },
  { title: "Papa Roach", variant: "artist-card--sunset" },
  { title: "Artist 2026", variant: "artist-card--question" },
  { title: "The Offspring", variant: "artist-card--night" },
  { title: "Artist 2026", variant: "artist-card--question" },
];

const faqItems = [
  {
    title: "Info festivaliers",
    copy: "Parking, launch windows, accessibility access, and entry timing.",
    open: true,
  },
  {
    title: "Info bénévoles",
    copy: "Volunteer call times, zone captains, and shift rotations.",
  },
  {
    title: "Lieux et scènes",
    copy: "Site landmarks, family spaces, food alley, and main stage routing.",
  },
  {
    title: "Foire aux questions",
    copy: "Weather policy, bag guidance, re-entry, and kid-friendly recommendations.",
  },
];

const promoCards = [
  {
    title: "Collector poster",
    copy: "Glow-night print",
    variant: "promo-card--tilt-left",
  },
  {
    title: "Daily guide",
    copy: "Mini itinerary deck",
    variant: "promo-card--center",
  },
  {
    title: "Kids pack",
    copy: "Games and stickers",
    variant: "promo-card--tilt-right",
  },
];

export default function Home() {
  return (
    <main className="page-shell" id="top">
      <header className="hero">
        <div className="hero__glow hero__glow--left" />
        <div className="hero__glow hero__glow--right" />
        <div className="hero__beam hero__beam--coral" />
        <div className="hero__beam hero__beam--amber" />
        <div className="hero__cube" />
        <div className="hero__balloon" />

        <nav className="topbar" aria-label="Primary">
          <span className="topbar__brand">Festivent</span>
          <div className="topbar__links">
            <a href="#artists">Artists</a>
            <a href="#activities">Activities</a>
            <a href="#tickets">Tickets</a>
          </div>
        </nav>

        <div className="hero__content">
          <p className="eyebrow">Summer air show, recast for Easter</p>
          <h1>Festivent</h1>
          <p className="hero__subhead">
            A bold one-page festival concept pulled from the provided Figma
            artboard and translated into a Next.js landing page.
          </p>
          <div className="hero__actions">
            <a className="pill pill--solid" href="#tickets">
              Get tickets
            </a>
            <a className="pill pill--ghost" href="#artists">
              View lineup
            </a>
          </div>
        </div>

        <div className="hero__poster">
          <div className="hero__poster-image" />
          <div className="hero__poster-copy">
            <span className="poster__label">Nights under the envelope glow</span>
            <strong>Live sets, food alleys, family rides.</strong>
          </div>
        </div>
      </header>

      <section className="panel panel--cream" id="artists">
        <div className="section-heading">
          <span className="section-heading__badge">Premiers artistes 2026</span>
          <h2>First artists announced</h2>
        </div>

        <div className="artist-grid">
          {artistCards.map((artist) => (
            <article className={`artist-card ${artist.variant}`} key={artist.title + artist.variant}>
              <div className="artist-card__art" />
              <h3>{artist.title}</h3>
            </article>
          ))}
        </div>

        <a className="link-row" href="#tickets">
          See the full schedule
        </a>
      </section>

      <section className="panel panel--navy" id="activities">
        <div className="section-heading section-heading--light">
          <span className="section-heading__badge">
            Activités pour petits et grands
          </span>
          <h2>Built like a festival map</h2>
        </div>

        <div className="activity-stack">
          <article className="feature-card feature-card--blue">
            <div>
              <p className="feature-card__kicker">Programme</p>
              <h3>Family lineup</h3>
            </div>
            <p>
              Morning launches, balloon glow, food trucks, and afternoon
              workshops arranged as quick-scanning content blocks.
            </p>
          </article>

          <article className="feature-card feature-card--orange">
            <div>
              <p className="feature-card__kicker">On-site</p>
              <h3>Info kiosk</h3>
            </div>
            <ul className="mini-list">
              <li>Queue-free gate timing</li>
              <li>Balloon launch windows</li>
              <li>Family route recommendations</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="panel panel--sky" id="visit">
        <div className="section-heading">
          <span className="section-heading__badge">Prépare ta visite</span>
          <h2>Plan the day before the wind changes</h2>
        </div>

        <div className="prep-layout">
          <div className="prep-visual">
            <div className="prep-visual__balloon prep-visual__balloon--one" />
            <div className="prep-visual__balloon prep-visual__balloon--two" />
            <div className="prep-visual__ticket">Festival map 2025</div>
          </div>

          <div className="prep-faq">
            {faqItems.map((item) => (
              <details key={item.title} open={item.open}>
                <summary>{item.title}</summary>
                <p>{item.copy}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="panel panel--cream panel--promo">
        <div className="promo-copy">
          <span className="section-heading__badge">
            Pour un vent de fraîcheur dans ton quotidien
          </span>
          <h2>Merch, maps, and memory hooks</h2>
          <p>
            The original design uses overlapping product moments. This version
            mirrors that rhythm with layered promo cards and warm shadows.
          </p>
        </div>

        <div className="promo-shelf">
          {promoCards.map((card) => (
            <article className={`promo-card ${card.variant}`} key={card.title}>
              <strong>{card.title}</strong>
              <span>{card.copy}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="panel panel--deep" id="tickets">
        <div className="ticket-banner">
          <div>
            <span className="section-heading__badge section-heading__badge--sky">
              Rejoins la fête
            </span>
            <h2>Take the blue-hour ticket lane</h2>
          </div>
          <a className="pill pill--solid pill--light" href="#top">
            Reserve now
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__content">
          <div>
            <p className="footer__eyebrow">Pour tout savoir sur le festival</p>
            <h2>Simple footer, loud color blocking.</h2>
          </div>
          <div className="footer__links">
            <a href="#artists">Lineup</a>
            <a href="#visit">Visitor info</a>
            <a href="#tickets">Billetterie</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
