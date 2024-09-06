import { Links, Meta, Outlet } from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "icon", href: "/favicon.svg", type: "image/svg" },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fff" />

        <Meta />
        <Links />
      </head>

      <Outlet />
    </html>
  );
}
