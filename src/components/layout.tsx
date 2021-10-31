import * as React from "react";
import { useThemeColor } from "../hooks/useThemeColor";
import { SiteNav } from "./SiteNav";
import Link from "next/link";
import { SiteFooter } from "./SiteFooter";

export const Layout: React.FC = ({ children }) => {
  useThemeColor("#ffffff");
  return (
    <div className="container mx-auto p-8 md:px-32 md:pt-16 h-full flex flex-col flex-1">
      <header className="mb-8 sm:flex flex-row-reverse justify-between items-center">
        <SiteNav className="mb-6 sm:mb-0" />
        <Link href="/">
          <a className="text-2xl uppercase font-light">Harry Grumbar</a>
        </Link>
      </header>
      <main>{children}</main>

      <SiteFooter className="py-12" />
    </div>
  );
};
