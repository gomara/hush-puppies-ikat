import type { Metadata } from 'next';

import { Montserrat } from 'next/font/google';

import Footer from '@/components/layouts/footer/Footer';
import Header from '@/components/layouts/header/Header';
import PurchaseConfetti from '@/components/layouts/confetti/PurchaseConfetti';

import './globals.css';

const montserrat = Montserrat({
  display: 'swap',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'hush-puppies-ikat',
  description: 'ikatech solution challenge',
  icons: {
    icon: '/favicon.webp',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning className={montserrat.className} lang="es">
      <body className="m-auto min-h-screen min-w-[500px] bg-background antialiased">
        <PurchaseConfetti />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
