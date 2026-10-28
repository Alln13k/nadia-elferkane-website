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
      <div className="header-ribbon">
        <div className="shell ribbon-inner">
          <span>Thérapie familiale systémique</span>
          <span>La Ciotat · Marseille</span>
          <a href="tel:+33625700824">06 25 70 08 24 <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Nadia El Ferkane-Blanc, accueil">
          <span className="brand-symbol"><img src="/images/embleme.png" alt="" width="278" height="200" /></span>
          <span className="brand-copy">
            <strong>Nadia <i>El Ferkane-Blanc</i></strong>
            <small>Thérapeute · accompagnement relationnel</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {links.map(([href, label], index) => (
            <Link key={href} href={href}>
              <span>0{index + 1}</span>{label}
            </Link>
          ))}
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Ouvrir le menu"><span className="menu-label">Menu</span><span aria-hidden="true">+</span></summary>
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
      <div className="shell footer-topline">
        <span className="footer-index">N · E · F</span>
        <p>Prendre soin du lien, un échange à la fois.</p>
        <span>Depuis La Ciotat & Marseille</span>
      </div>
      <div className="shell footer-grid">
        <div className="footer-introduction">
          <Link className="footer-brand" href="/">
            <span className="brand-symbol"><img src="/images/embleme.png" alt="" width="278" height="200" /></span>
            <span className="brand-copy">
              <strong>Nadia <i>El Ferkane-Blanc</i></strong>
              <small>Thérapeute familiale systémique</small>
            </span>
          </Link>
          <p className="footer-intro">Un espace pour déposer, comprendre et avancer ensemble.</p>
        </div>
        <div className="footer-column">
          <p className="footer-label">Navigation</p>
          {links.slice(1).map(([href, label]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </div>
        <div className="footer-column footer-contact">
          <p className="footer-label">Écrire · appeler</p>
          <a href="mailto:elferkane.nadia@hotmail.fr">elferkane.nadia@hotmail.fr</a>
          <a href="tel:+33625700824">06 25 70 08 24</a>
          <span>Consultations sur rendez-vous</span>
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
        <div className="page-header-kicker">
          <span className="page-number">N / E / F</span>
          <p className="overline">{label}</p>
        </div>
        <h1>{title}</h1>
        {intro ? <p className="page-intro">{intro}</p> : null}
        <span className="header-orbit header-orbit-one" aria-hidden="true" />
        <span className="header-orbit header-orbit-two" aria-hidden="true" />
      </div>
    </section>
  );
}

export function Invite() {
  return (
    <section className="invite">
      <div className="shell invite-inner">
        <div className="invite-stamp" aria-hidden="true">N<br /><span>·</span><br />E<br /><span>·</span><br />F</div>
        <div className="invite-copy">
          <p className="overline">Un premier échange</p>
          <h2>Parlons de ce qui vous amène.</h2>
          <p>Écrivez-moi en indiquant votre demande et vos coordonnées. Je vous recontacterai pour un entretien téléphonique préalable.</p>
        </div>
        <div className="invite-actions">
          <a className="button button-light" href="mailto:elferkane.nadia@hotmail.fr">
            Écrire un email <span aria-hidden="true">↗</span>
          </a>
          <a className="invite-phone" href="tel:+33625700824">06 25 70 08 24 <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
