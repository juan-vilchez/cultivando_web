import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from 'next/font/google';
import "./globals.css";
import WhatsAppButton from "./componentesgeneral/whatsAppButton";

/* const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); */

const poppins = Poppins({
  subsets: ['latin'], // Especifica los subsets de caracteres que necesitas
  weight: ['400', '500', '600', '700'], // Especifica los pesos que quieres usar
  variable: '--font-poppins', // Define una variable CSS para usar en tus estilos
});

export const metadata: Metadata = {
  title: "Cultivando",
  description: "Centro de Desarrollo Integral",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <WhatsAppButton/>
      </body>
    </html>
  );
}
