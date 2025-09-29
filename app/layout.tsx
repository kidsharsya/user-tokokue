import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins', // opsional, kalau mau pakai Tailwind custom
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
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
