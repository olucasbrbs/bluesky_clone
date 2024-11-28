import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google"
import "./globals.css";

export const nunitoSans = Nunito_Sans({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "BlueSky Clone",
  description: "This is a WIP of the BlueSky Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.className} flex flex-col min-h-screen box-border`}>
        {children}
      </body>
    </html>
  );
}
