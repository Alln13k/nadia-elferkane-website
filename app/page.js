import Link from 'next/link';
import { Invite } from '../components/site';

const services = [
  ['01', 'Thérapie individuelle', 'Un espace pour déposer ce qui vous pèse et retrouver des repères qui vous correspondent.'],
  ['02', 'Thérapie de couple', 'Regarder ensemble les difficultés relationnelles et ouvrir un dialogue.'],
  ['03', 'Thérapie familiale', 'Prendre en compte les liens, les places et les ressources de chaque membre.'],
];

export default function HomePage() {
  return (
    <main id="contenu">
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="hero-kicker"><span>01</span><p className="overline">Thérapie familiale systémique</p></div>
            <h1>
              Retrouver un espace pour <em>avancer ensemble</em><sup>✳</sup>
            </h1>
            <p className="lead">
              Je vous accueille à La Ciotat et à Marseille pour un accompagnement individuel, de couple ou familial,
              adapté à votre situation.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/contact">
                Prendre rendez-vous <span aria-hidden="true">↗</span>
              </Link>
              <Link className="under-link" href="/therapies">
                Les accompagnements <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="hero-footnote">
              <span>Une pratique relationnelle</span>
              <span>Scroller pour explorer <b aria-hidden="true">↓</b></span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-frame">
              <span className="visual-corner visual-corner-one" aria-hidden="true" />
              <span className="visual-corner visual-corner-two" aria-hidden="true" />
              <img src="/images/portrait.png" alt="Nadia El Ferkane-Blanc" width="578" height="598" />
            </div>
            <span className="visual-note">Portrait · 2024</span>
            <span className="hero-name">Nadia El Ferkane-Blanc</span>
            <span className="visual-number" aria-hidden="true">01</span>
          </div>
        </div>
      </section>
      <section className="section paper">
        <div className="shell two-col">
          <div className="section-side">
            <span className="section-index">02</span>
            <p className="overline">Une approche relationnelle</p>
          </div>
          <div>
            <h2 className="section-title">Ce que nous vivons prend forme dans nos relations.</h2>
            <p className="section-copy">
              L’approche systémique s’intéresse à l’individu au regard des différents systèmes auxquels il appartient :
              le couple, la famille, le milieu professionnel. Les difficultés sont considérées dans la perspective des
              relations avec l’environnement.
            </p>
            <Link className="under-link" href="/presentation">
              En savoir plus sur mon parcours <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <div className="heading-kicker"><span>03</span><p className="overline">Les accompagnements</p></div>
              <h2 className="section-title">Un travail ajusté à votre demande.</h2>
            </div>
            <Link className="under-link" href="/therapies">
              Voir les accompagnements <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="cards">
            {services.map(([number, title, text]) => (
              <article className="card" key={number}>
                <span className="card-number">{number}</span>
                <span className="card-tag">Accompagnement</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link className="card-arrow" href="/therapies" aria-label={`En savoir plus : ${title}`}>
                  <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Invite />
    </main>
  );
}
