import { Inter } from 'next/font/google';
import './globals.css';
import './prism.css';
import Providers from './providers';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });

export const metadata = { title: 'Deep Mirror', description: 'Full Stack Project' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
