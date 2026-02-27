import type { Metadata } from "next";
import "./globals.css";

export const runtime = 'edge';

export const metadata: Metadata = {
  title: "Quinten Peels - DevOps Engineer",
  description: "DevOps Engineer specializing in cloud infrastructure, CI/CD, and automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark:scheme-dark">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
