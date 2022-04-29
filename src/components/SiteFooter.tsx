import * as React from "react";

interface Props {
  className?: string;
}

export const SiteFooter: React.FC<Props> = ({ className = "" }) => {
  return (
    <footer
      className={`w-full mt-auto text-sm flex justify-between pb-12 ${className}`}
    >
      <nav>
        <ul className="space-x-4">
          <li className="inline-block">
            <a
              href="https://twitter.com/harrygrumbar"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
          <li className="inline-block">
            <a
              href="https://github.com/harrygr"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li className="inline-block">
            <a href="mailto:harry@grumbar.me" target="_blank" rel="noreferrer">
              Email
            </a>
          </li>
          <li className="inline-block">
            <a href="/cv.html" target="_blank">
              CV
            </a>
          </li>
        </ul>
      </nav>
      <p className="text-gray-400">&copy; 2021</p>
    </footer>
  );
};
