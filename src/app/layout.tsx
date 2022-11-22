import Link from "next/link";
import React from "react";
import { Inter } from "@next/font/google";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";

import "../styles/globals.css";

const inter = Inter({ variable: "--font-inter" });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className={`h-full ${inter.className}`} lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <meta name="theme-color" content="#fff" />
        <script
          async
          defer
          data-website-id="049a950f-3150-4194-a086-64da434ce6d1"
          src="https://umami-hg.fly.dev/umami.js"
        ></script>
      </head>
      <body className="h-full antialiased font-body">
        <div className="container mx-auto p-8 md:px-32 md:pt-16 h-full flex flex-col flex-1">
          <header className="mb-8 flex justify-between items-center">
            <Link href="/" className="text-2xl uppercase font-light">
              Harry Grumbar
            </Link>
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
