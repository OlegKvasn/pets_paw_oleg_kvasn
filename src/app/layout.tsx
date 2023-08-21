import "./globals.css";
import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pets Paw App",
  description: "Created by Oleg Kvasnytskyi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
