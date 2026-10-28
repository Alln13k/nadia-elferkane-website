import Link from 'next/link';
import { Invite, PageHeader } from '../../components/site';

export const metadata = {
  title: 'Accompagnements',
  description: 'Thérapie individuelle, de couple et familiale selon une approche systémique à La Ciotat et Marseille.',
};

const items = [
  ['01', 'Thérapie individuelle', 'Vous traversez une étape de vie douloureuse, êtes en situation de souffrance ou recherchez un nouvel équilibre.'],
  ['02', 'Thérapie de couple', 'Un accompagnement pour regarder ensemble les difficultés relationnelles et ouvrir un dialogue.'],
  ['03', 'Thérapie familiale', 'La démarche prend en compte les relations entre les personnes et leur environnement.'],
];

export default function TherapiesPage() {
  return (
    <main id="contenu">
      <PageHeader
        label="Les accompagnements"
        title="Un espace pour regarder autrement."
        intro="L’accompagnement se construit avec vous, selon votre demande, vos attentes et la situation que vous traversez."
      />
      <section className="section paper">
        <div className="shell">
          <div className="two-col approach-intro">
            <p className="overline">L’approche systémique</p>
            <p>
              Elle s’intéresse à l’individu au regard des différents systèmes auxquels il appartient : couple, famille,
              milieu professionnel. Les difficultés sont considérées dans la perspective des relations entretenues avec
              l’environnement.
            </p>
          </div>
          <div>
            {items.map(([number, title, intro]) => (
              <article className="approach" id={title.toLowerCase().replaceAll(' ', '-')} key={number}>
                <span className="card-number">{number}</span>
                <div>
                  <h2>{title}</h2>
                  <p>{intro}</p>
                  <p className="subcopy">Nous déterminerons ensemble les modalités du travail, selon vos attentes et mon champ de compétence.</p>
                </div>
                <Link href="/tarifs">Voir les modalités ↗</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Invite />
    </main>
  );
}
