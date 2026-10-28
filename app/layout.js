import './globals.css';
import { SiteFooter, SiteHeader } from '../components/site';

const siteUrl = 'https://www.therapie-familiale-systemique.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Nadia El Ferkane-Blanc — Thérapeute familiale systémique',
    template: '%s | Nadia El Ferkane-Blanc',
  },
  description:
    'Nadia El Ferkane-Blanc accompagne les personnes, les couples et les familles à La Ciotat et Marseille.',
  keywords: ['thérapie familiale', 'thérapie systémique', 'thérapie de couple', 'La Ciotat', 'Marseille'],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Nadia El Ferkane-Blanc',
    title: 'Nadia El Ferkane-Blanc — Thérapeute familiale systémique',
    description: 'Un accompagnement individuel, de couple ou familial à La Ciotat et Marseille.',
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f4f0e9',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <a className="skip-link" href="#contenu">
          Aller au contenu
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
