import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeDropdown from '@/components/shared/ThemeDropdown';
import { themeScript } from '@/utils/themeScript'; 

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vsg news',
  description: 'Vsg news description'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{__html: themeScript}}/>
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar/>
        <main className="mx-auto w-full max-w-screen-xl grow px-2">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
