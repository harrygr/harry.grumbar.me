import * as React from "react";
import Link from "next/link";

interface Props {
  className?: string;
}

export const SiteNav: React.FC<Props> = ({ className = "" }) => {
  return (
    <nav className={`text-lg space-x-6 ${className}`}>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  );
};
