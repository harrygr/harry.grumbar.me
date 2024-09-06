import { HeadersFunction } from "@remix-run/node";
import { MetaFunction } from "@remix-run/react";

export const headers: HeadersFunction = () => {
  return {
    "Cache-Control": "max-age=300, s-maxage=1, stale-while-revalidate=8600",
  };
};

export const meta: MetaFunction = () => [
  { name: "title", content: "Harry Grumbar | Contact" },
  { name: "description", content: "How to contact Harry Grumbar" },
];

const Contact = () => {
  return (
    <>
      <header className="w-full mb-8">
        <h1 className="text-4xl font-bold tracking-tighter text-gray-800">
          Contact
        </h1>
      </header>

      <article className="prose">
        <p>
          If you&apos;d like to get in touch to learn more about my work, or
          grab a coffee, here&apos;s how you can contact me.
        </p>

        <ul>
          <li>
            <a href="mailto:harry@grumbar.me">Email me</a>
          </li>
          <li>
            <a href="https://twitter.com/harrygrumbar">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/harrygr">Github</a>
          </li>
        </ul>
      </article>
    </>
  );
};

export default Contact;
