import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/header";

const nunito = Nunito({ subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'], });

export const metadata: Metadata = {
  title: "Next Pizza | Home",
  description: "Pizza delivery in 30 minutes or less",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <main className="min-h-screen">
          <Header />
          {children}
        </main>
        </body>
    </html>
  );
}
