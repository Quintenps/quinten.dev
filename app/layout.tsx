import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  description: "Quinten Peels - Software engineer living in Baarn, Utrecht",
  title: { default: "quinten.dev", template: "%s" }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col md:flex-row text-gray-200">
          <Navbar />
          <main className="p-12 z-0 w-full">
          {children}
          </main>
      </body>
    </html>
  );
}
