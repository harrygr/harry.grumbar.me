import { Link } from "@remix-run/react";
import * as React from "react";

interface Props {
  className?: string;
}

export const SiteNav: React.FC<Props> = ({ className = "" }) => {
  return (
    <nav className={`text-lg space-x-6 ${className}`}>
      <Link to="/projects" className="opacity-70 hover:opacity-100">
        Projects
      </Link>
      <Link to="/contact" className="opacity-70 hover:opacity-100">
        Contact
      </Link>
    </nav>
  );
};
