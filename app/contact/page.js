import Link from 'next/link';
import { PageHeader } from '../../components/site';

export const metadata = {
  title: 'Contact',
  description: 'Contacter Nadia El Ferkane-Blanc par email ou téléphone à La Ciotat et Marseille.',
};

export default function ContactPage() {
  return (
    <main id="contenu">
      <PageHeader
        label="Me joindre"
        title="Commençons par un échange."
        intro="Présentez-moi votre demande par email ou laissez-moi un message. Je vous recontacterai afin que nous puissions convenir d’un premier échange téléphonique."
      />
      <section className="section paper">
        <div className="shell contact-grid">
          <div>
            <a className="contact-method" href="mailto:elferkane.nadia@hotmail.fr">
              <small>Email</small>
              <strong>elferkane.nadia@hotmail.fr</strong>
              <span aria-hidden="true">↗</span>
            </a>
            <a className="contact-method" href="tel:+33625700824">
              <small>Téléphone</small>
              <strong>06 25 70 08 24</strong>
              <span aria-hidden="true">↗</span>
            </a>
            <p className="contact-note">
              Par email de préférence, indiquez les éléments de votre demande ainsi que vos coordonnées. Par téléphone,
              vous pouvez laisser un message.
            </p>
          </div>
          <aside className="location">
            <p className="overline">Lieux de consultation</p>
            <h2>La Ciotat</h2>
            <p>50 Voie Ariane, Zone Athélia 1<br />13600 La Ciotat, France</p>
            <h2>Marseille</h2>
            <p>4 rue de la Calanque<br />13008 Marseille, France</p>
            <small>Consultations sur rendez-vous.</small>
          </aside>
        </div>
      </section>
      <section className="quote">
        <div className="shell">
          <blockquote>« Je vous propose de nous rencontrer afin d’échanger sur ce qui vous pose problème. »</blockquote>
          <cite>— Nadia El Ferkane-Blanc</cite>
          <Link className="button" href="/therapies">Voir les accompagnements →</Link>
        </div>
      </section>
    </main>
  );
}
