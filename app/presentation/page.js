import { Invite, PageHeader } from '../../components/site';

export const metadata = {
  title: 'Qui suis-je ?',
  description: 'Le parcours de Nadia El Ferkane-Blanc, thérapeute familiale systémique à La Ciotat et Marseille.',
};

export default function PresentationPage() {
  return (
    <main id="contenu">
      <PageHeader
        label="Mon parcours"
        title="Qui suis-je ?"
        intro="Une pratique nourrie par l’expérience du soin, du travail social et de l’accompagnement des équipes."
      />
      <section className="section paper">
        <div className="shell two-col story">
          <div className="portrait-frame">
            <img src="/images/portrait.png" alt="Nadia El Ferkane-Blanc" width="578" height="598" />
          </div>
          <div className="prose">
            <p className="overline">Une posture systémique</p>
            <h2>Comprendre la singularité de chaque parcours.</h2>
            <p>
              Infirmière de formation initiale, j’ai exercé durant de nombreuses années au sein d’un pôle de
              psychiatrie infanto-juvénile, ainsi que dans le champ de la Protection de l’Enfance, auprès de mineurs
              non accompagnés.
            </p>
            <p>
              Ces expériences auprès des jeunes et de leurs familles, mais aussi ma pratique auprès des équipes
              pluridisciplinaires et des partenaires, m’ont amenée à m’interroger sur la complexité des situations et
              des contextes.
            </p>
            <p>
              Après m’être formée durant quatre ans au Centre de formation et de consultation La Durance à Marseille,
              j’ai obtenu une certification de thérapeute familiale systémique.
            </p>
            <p>
              Je suis également formatrice vacataire auprès d’équipes du champ social, médico-social ou de la petite
              enfance, et j’interviens en Analyse des Pratiques Professionnelles.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell two-col">
          <p className="overline">Formations</p>
          <div className="formation-list">
            <p>Certificat de thérapeute familiale systémique — La Durance, Marseille</p>
            <p>Diplôme d’État Infirmier — IFSI Digne-les-Bains</p>
            <p>Formation à l’analyse des pratiques professionnelles — IFSMB, Montpellier</p>
          </div>
        </div>
      </section>
      <Invite />
    </main>
  );
}
