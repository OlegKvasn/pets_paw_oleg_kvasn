import Navigation from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pets Paw",
  description: "Created by Oleg Kvasnytskyi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Navigation></Navigation>
        {children}
      </body>
    </html>
  );
}
