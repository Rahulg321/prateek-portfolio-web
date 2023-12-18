import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from '@/lib/ThemeProvider';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Medicine App',
  description: 'An App to safeguard your health',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Providers>
            <div className="parent-container">
              <Header />
              {children}
              <Footer />
            </div>
          </Providers>
        </main>
      </body>
    </html>
  );
}
