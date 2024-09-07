import { LinksFunction } from "@remix-run/node";
import { Link, Outlet, ScrollRestoration, Scripts } from "@remix-run/react";
import { $path } from "remix-routes";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteNav } from "~/components/SiteNav";
import "~/styles/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: "/fonts/inter-web/inter.css" },
];

const App = () => {
  return (
    <body className="h-full antialiased font-body text-gray-900">
      <div className="container mx-auto p-8 md:px-32 md:pt-16 h-full flex flex-col flex-1">
        <header className="mb-8 flex justify-between items-center">
          <h1 className="text-2xl uppercase font-light">
            <Link to={$path("/")}>Harry Grumbar</Link>
          </h1>
          <SiteNav />
        </header>
        <main>
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <SiteFooter className="py-12" />
      </div>
    </body>
  );
};

export default App;
