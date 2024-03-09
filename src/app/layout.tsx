import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';
import { FavoritesProvider, ClearSearchProvider } from './providers';

export const metadata: Metadata = {
  title: 'ZARA WEB CHALLENGE',
  description: 'Answer to ZARA WEB CHALLENGE',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FavoritesProvider>
          <ClearSearchProvider>
            <Header />
            {children}
          </ClearSearchProvider>
        </FavoritesProvider>
      </body>
    </html>
  );
}
