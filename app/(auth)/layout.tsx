import { Poppins } from "next/font/google";
import "../globals.css";

export const metadata = {
  title: "Sign into PortBack",
  description: "A portfolio backend as a service platform",
};

const poppins = Poppins({ weight: "400", subsets: ["devanagari"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <main className="background min-h-screen">{children}</main>
      </body>
    </html>
  );
}
