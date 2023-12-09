import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Router from "@/utils/Router";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PortBack",
  description: "A porfolio backend as a service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Router />
        <main className=" background min-h-screen">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
