import { Inter, Roboto  } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const roboto = Roboto({
  weight: ['400', '500', '300', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Next Hotel Management",
  description: "Using next.js and shadcn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Navbar></Navbar>
        <div>
        {children}
        </div>
      </body>
    </html>
  );
}
