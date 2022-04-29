import { Layout } from "../components/layout";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Harry Grumbar</title>
        <meta
          name="description"
          content="Harry Grumbar, London-based software engineer"
        ></meta>
      </Head>

      <article className="prose">
        <p>
          Hi, I'm Harry, a London-based software engineer who loves using
          technology to build incredible products that people love to use.
        </p>

        <p>
          I'm currently working on building{" "}
          <a
            href="https://matchhaus.io"
            target="_blank"
            title="Matchhaus"
            rel="noreferrer"
          >
            MatchHaus
          </a>
          , a network for team sport.
        </p>

        <p>
          In my previous role I worked at{" "}
          <a
            href="https://bulb.co.uk"
            target="_blank"
            title="Bulb"
            rel="noreferrer"
          >
            Bulb
          </a>
          , the fastest growing company in the UK. I spent over 3 years building
          Bulb's core member-facing products, new payment systems, security
          &amp; fraud prevention, and revenue assurance automation as the
          company went through a period of hyper-growth.
        </p>

        <p>
          During my time at Bulb their member base increased from 100,000 to
          over 1.6 million.
        </p>

        <p>
          And before that I worked at{" "}
          <a href="https://goodlord.co" target="_blank" rel="noreferrer">
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

export default Home;
