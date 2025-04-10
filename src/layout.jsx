import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Threads",
  description: "Partagez des Threads !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
      >
        {children}
        
      </body>
    </html>
  );
}
