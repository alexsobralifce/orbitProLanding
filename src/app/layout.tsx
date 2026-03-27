import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Orbit Pro – Soluções em IA",
  description: "Consultoria em Inteligência Artificial, desenvolvimento de agentes e bots, aplicações web e mobile, e análise de dados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="antialiased min-h-screen font-sans bg-background text-foreground selection:bg-orbit-magenta selection:text-white relative flex flex-col">
        {children}
      </body>
    </html>
  );
}
