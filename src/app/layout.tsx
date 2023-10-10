import Link from "next/link";
import React from "react";
import { Inter } from "next/font/google";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";

import "../styles/globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ||
      process.env.VERCEL_URL ||
      `http://localhost:${process.env.PORT ?? "3000"}`
  ),
  alternates: {
    canonical: "./",
  },
};

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html className={`h-full ${inter.className}`} lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <meta name="theme-color" content="#fff" />
        <script
          async
          defer
          data-website-id="049a950f-3150-4194-a086-64da434ce6d1"
          src="https://umami-hg.fly.dev/script.js"
        ></script>
      </head>
      <body className="h-full antialiased font-body text-gray-900">
        <div className="container mx-auto p-8 md:px-32 md:pt-16 h-full flex flex-col flex-1">
          <header className="mb-8 flex justify-between items-center">
            <h1 className="text-2xl uppercase font-light">
              <Link href="/">Harry Grumbar</Link>
            </h1>
            <SiteNav />
          </header>
          <main>{children}</main>

          <SiteFooter className="py-12" />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
