import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Exotic Car Hiring",
  description: "Build and developed by Kgaugelo.Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="relative"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
