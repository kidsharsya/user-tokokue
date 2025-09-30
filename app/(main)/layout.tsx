// app/(main)/layout.tsx
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../globals.css';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { CartProvider } from '@/contexts/CartContext';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Elysian Sweets',
  description: 'Mahakarya dalam Setiap Potongan',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className={`${poppins.variable} antialiased`}>
        <CartProvider>
          <Navbar />
          <main className="mt-16">{children}</main>
          <Footer />
        </CartProvider>
      </div>
    </div>
  );
}
