import Link from 'next/link';

export default function NotFound() {
  return (
    <main id="contenu" className="page-header">
      <div className="shell page-header-inner">
        <p className="overline">Page introuvable</p>
        <h1>Revenons à l’essentiel.</h1>
        <p className="page-intro">Cette page n’existe pas ou a été déplacée.</p>
        <Link className="button" href="/" style={{ marginTop: 30 }}>
          Retour à l’accueil <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </main>
  );
}
