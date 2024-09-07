import { Link } from "@remix-run/react";
import * as React from "react";
import { $path } from "remix-routes";

interface Props {
  className?: string;
}

export const SiteNav: React.FC<Props> = ({ className = "" }) => {
  return (
    <nav className={`text-lg space-x-6 ${className}`}>
      <Link to={$path("/projects")} className="opacity-70 hover:opacity-100">
        Projects
      </Link>
      <Link to={$path("/contact")} className="opacity-70 hover:opacity-100">
        Contact
      </Link>
    </nav>
  );
};
