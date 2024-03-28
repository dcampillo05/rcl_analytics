import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RCL Analytics",
  description: "LeadingPage da RCL Analytics",
  icons:{
    icon:[
      "/favicon.ico?v=4",
    ],
    apple: [
      "/apple-touch-icon.png?v=4",
    ],
    shortcut: [
      "apple-touch-icon.png"
    ],
  },
  manifest: 'site.webmanifest'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head><link rel="icon" href="/Logo.png" /></Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
