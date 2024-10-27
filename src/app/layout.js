import { Exo_2 } from "next/font/google";
import './globals.css';

const exo = Exo_2({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: 'Space News',
  description: 'Here you will find the latest and more relevant space news!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${exo.className} antialiased`}>{children}</body>
    </html>
  );
}
