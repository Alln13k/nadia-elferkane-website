import Link from 'next/link';
import { Invite, PageHeader } from '../../components/site';

export const metadata = {
  title: 'Tarifs et modalités',
  description: 'Durées, tarifs et modalités des consultations de Nadia El Ferkane-Blanc.',
};

const rates = [
  ['Thérapie individuelle', '45 min', '60 €'],
  ['Thérapie de couple', '1 h', '70 €'],
  ['Thérapie familiale', '1 h', '80 €'],
];

export default function TarifsPage() {
  return (
    <main id="contenu">
      <PageHeader
        label="Tarifs et modalités"
        title="Les informations pratiques."
        intro="Un premier échange téléphonique gratuit nous permet de faire connaissance et de préciser votre demande."
      />
      <section className="section paper">
        <div className="shell">
          <div className="cards process">
            {[
              ['01', 'Votre demande', 'Écrivez-moi de préférence par email en indiquant votre demande et vos coordonnées.'],
              ['02', 'Un premier échange', 'Nous convenons ensuite d’un entretien téléphonique préalable gratuit. Prévoyez environ 20 minutes.'],
              ['03', 'Un rendez-vous adapté', 'À l’issue de cet échange, je vous propose un premier rendez-vous adapté.'],
            ].map(([number, title, text]) => (
              <article className="card" key={number}>
                <span className="card-number">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="rates two-col">
            <div>
              <p className="overline">Consultations</p>
              <h2>Durée et tarif par séance</h2>
            </div>
            <div>
              {rates.map(([title, duration, price]) => (
                <div className="rate" key={title}>
                  <h3>{title}</h3>
                  <span>{duration}</span>
                  <b>{price}</b>
                </div>
              ))}
            </div>
          </div>
          <div className="notes">
            <p><b>Règlement.</b> Paiement par chèque et espèces uniquement.</p>
            <p><b>Remboursement.</b> Les consultations ne sont pas remboursées par la Sécurité sociale. Certaines mutuelles peuvent prendre en charge une partie des frais.</p>
            <p><b>Annulation.</b> Prévenir au plus tard 48 heures à l’avance. Toute consultation non décommandée dans ce délai vous sera facturée.</p>
          </div>
          <p className="contact-note">Une question ? <Link href="/contact">Écrivez-moi</Link>.</p>
        </div>
      </section>
      <Invite />
    </main>
  );
}
