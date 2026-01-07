import { Links, Meta, Outlet } from "react-router";
import type { LinksFunction } from "react-router";

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

        <script
          async
          defer
          data-website-id="049a950f-3150-4194-a086-64da434ce6d1"
          src="https://umami-hg.fly.dev/script.js"
        ></script>

        <Meta />
        <Links />
      </head>

      <Outlet />
    </html>
  );
}
