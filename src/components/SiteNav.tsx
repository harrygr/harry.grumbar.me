import * as React from "react";
import Link from "next/link";

interface Props {
  className?: string;
}

export const SiteNav: React.FC<Props> = ({ className = "" }) => {
  return (
    <nav className={`text-lg space-x-6 ${className}`}>
      <Link href="/projects" className="opacity-70 hover:opacity-100">
        Projects
      </Link>
      <Link href="/contact" className="opacity-70 hover:opacity-100">
        Contact
      </Link>
    </nav>
  );
};
