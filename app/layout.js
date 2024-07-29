import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: '/favicon.png', 
  },
  title: "1er Août de la Part-Dieu",
  description: "Manifestation du 1er août à La Part-Dieu en Gruyère",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
