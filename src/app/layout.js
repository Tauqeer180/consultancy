import { Inter, Fredoka, Albert_Sans, Kode_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  fallback: "serif",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  fallback: "serif",
});
const albert = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert",
  fallback: "serif",
});
const kode = Kode_Mono({
  subsets: ["latin"],
  variable: "--font-kode",
  fallback: "serif",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${albert.variable} ${inter.variable} ${kode.variable} ${fredoka.variable}`}
      >
        <Header />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  );
}
