import { Layout } from "../components/layout";
import Head from "next/head";

const Contact: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Contact | Harry Grumbar</title>
        <meta name="description" content="How to contact Harry Grumbar"></meta>
      </Head>
      <header className="w-full mb-8">
        <h1 className="text-4xl font-bold tracking-tighter text-gray-800">
          Contact
        </h1>
      </header>

      <article className="prose">
        <p>
          If you'd like to get in touch to learn more about my work, or grab a
          coffee, here's how you can contact me.
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
    </Layout>
  );
};

export default Contact;
