import Link from 'next/link';

const links = [
  ['/', 'Accueil'],
  ['/presentation', 'Qui suis-je ?'],
  ['/therapies', 'Accompagnements'],
  ['/tarifs', 'Tarifs'],
  ['/contact', 'Contact'],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Nadia El Ferkane-Blanc, accueil">
          <img src="/images/embleme.png" alt="" width="278" height="200" />
          <span>
            <strong>Nadia El Ferkane-Blanc</strong>
            <small>Thérapeute familiale systémique</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {links.map(([href, label]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <a className="header-phone" href="tel:+33625700824" aria-label="Appeler le 06 25 70 08 24">
          <span className="phone-dot" aria-hidden="true" />
          06 25 70 08 24
        </a>
        <details className="mobile-menu">
          <summary aria-label="Ouvrir le menu">Menu <span aria-hidden="true">+</span></summary>
          <nav aria-label="Navigation mobile">
            {links.map(([href, label]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
            <a href="tel:+33625700824">06 25 70 08 24</a>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Link className="footer-brand" href="/">
            <img src="/images/embleme.png" alt="" width="278" height="200" />
            <span>
              <strong>Nadia El Ferkane-Blanc</strong>
              <small>Thérapeute familiale systémique</small>
            </span>
          </Link>
          <p className="footer-intro">Un espace pour déposer, comprendre et avancer ensemble.</p>
        </div>
        <div className="footer-column">
          <p className="footer-label">Explorer</p>
          {links.slice(1).map(([href, label]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </div>
        <div className="footer-column">
          <p className="footer-label">Me joindre</p>
          <a href="tel:+33625700824">06 25 70 08 24</a>
          <a href="mailto:elferkane.nadia@hotmail.fr">elferkane.nadia@hotmail.fr</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Nadia El Ferkane-Blanc</span>
        <span>SIRET 922 238 316 00017</span>
      </div>
    </footer>
  );
}

export function PageHeader({ label, title, intro }) {
  return (
    <section className="page-header">
      <div className="shell page-header-inner">
        <p className="overline">{label}</p>
        <h1>{title}</h1>
        {intro ? <p className="page-intro">{intro}</p> : null}
        <span className="header-mark" aria-hidden="true" />
      </div>
    </section>
  );
}

export function Invite() {
  return (
    <section className="invite">
      <div className="shell invite-inner">
        <div>
          <p className="overline">Un premier échange</p>
          <h2>Parlons de ce qui vous amène.</h2>
          <p>
            Écrivez-moi en indiquant votre demande et vos coordonnées. Je vous recontacterai pour un entretien
            téléphonique préalable.
          </p>
        </div>
        <div className="invite-actions">
          <a className="button button-light" href="mailto:elferkane.nadia@hotmail.fr">
            Envoyer un email <span aria-hidden="true">↗</span>
          </a>
          <a className="under-link under-link-light" href="tel:+33625700824">
            06 25 70 08 24
          </a>
        </div>
      </div>
    </section>
  );
}
