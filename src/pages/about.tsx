import { Layout } from "../components/layout";
import Head from "next/head";

const About: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>About | Harry Grumbar</title>
        <meta name="description" content="About Harry Grumbar"></meta>
      </Head>

      <header className="w-full mb-8">
        <h1 className="text-4xl font-bold tracking-tighter text-gray-800">
          About
        </h1>
      </header>

      <article className="prose">
        <p>
          Hey, I'm Harry, a London-based software engineer who loves using
          technology to build incredible products that people love using.
        </p>

        <p>
          I'm currently working on building{" "}
          <a href="https://matchhaus.io" target="_blank" title="Matchhaus">
            MatchHaus
          </a>
          , a network for team sport.
        </p>

        <p>
          In my previous role I worked at{" "}
          <a href="https://bulb.co.uk" target="_blank" title="Bulb">
            Bulb
          </a>
          , the fastest growing company in the UK. I spent over 3 years building
          Bulb's core member-facing products, new payment systems, security
          &amp; fraud prevention, and revenue assurance automation as the
          company went through a period of hyper-growth.
        </p>

        <p>
          During my time at Bulb their member based increased from 100,000 to
          over 1.6 million.
        </p>

        <p>
          And before that I worked at{" "}
          <a href="https://goodlord.co" target="_blank">
            Goodlord
          </a>
          , a proptech startup, building tools to streamline and take the pain
          out of renting a home. During my time I helped replatform their core
          tenancy service and build their new referencing system.
        </p>
      </article>
    </Layout>
  );
};

export default About;