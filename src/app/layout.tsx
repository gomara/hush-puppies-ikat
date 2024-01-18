import type { Metadata } from 'next';

import { Montserrat } from 'next/font/google';

import Footer from '@/components/layouts/footer/Footer';
import Header from '@/components/layouts/header/Header';
import AnnouncementBar from '@/components/layouts/header/AnnouncementBar';
import NavigationMenu from '@/components/layouts/header/NavigationMenu';

import './globals.css';

const montserrat = Montserrat({
  display: 'swap',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'hush-puppies-ikat',
  description: 'ikatech solution challenge',
  icons: {
    icon: 'favicon.webp',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning className={montserrat.className} lang="es">
      <body className="m-auto min-h-screen bg-background antialiased">
        <Header>
          <AnnouncementBar />
          <NavigationMenu />
        </Header>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
