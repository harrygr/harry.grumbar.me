import * as React from "react";
import { useThemeColor } from "../hooks/useThemeColor";
import { SiteNav } from "./SiteNav";
import Link from "next/link";

export const Layout: React.FC = ({ children }) => {
  useThemeColor("#ffffff");
  return (
    <div className="container mx-auto p-8 md:px-32 md:pt-16">
      <header className="mb-8 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl uppercase font-light">Harry Grumbar</a>
        </Link>
        <SiteNav className="" />
      </header>
      <main>{children}</main>
    </div>
  );
};
