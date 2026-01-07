import type { HeadersFunction, MetaFunction } from "react-router";
import { differenceInYears } from "date-fns/differenceInYears";
import { useMemo } from "react";

export const headers: HeadersFunction = () => {
  return {
    "Cache-Control": "max-age=300, s-maxage=1, stale-while-revalidate=8600",
  };
};

export const meta: MetaFunction = () => {
  return [
    { title: "Harry Grumbar | Product engineer" },
    {
      name: "description",
      content:
        "Harry Grumbar is a product engineer and technical co-founder with skills in front and back-end web development, cloud services and agile working methods. He has experience delivering high-quality software to millions of users across a range of industries.",
    },
  ];
};

const Home = () => {
  const yearsExperience = useMemo(
    () => differenceInYears(new Date(Date.now()), new Date(2014, 6, 1)),
    []
  );

  return (
    <article className="prose">
      <p>
        Hi, I&apos;m Harry, a product engineer and technical co-founder who
        loves building tech products that are a pleasure to use and solve real
        problems.
      </p>

      <p>
        With over {yearsExperience} years of experience building and delivering
        software projects I know what it takes to be part of a successful
        engineering team shipping great products. I have also co-founded my own
        software startup,{" "}
        <a
          href="https://matchhaus.io"
          target="_blank"
          title="Matchhaus"
          rel="noreferrer"
        >
          MatchHaus
        </a>
        .
      </p>

      <p>
        In a previous role I worked at Bulb when it was the fastest growing
        company in the UK and became one of the country&apos;s largest energy
        suppliers. I spent over 3 years building Bulb&apos;s core member-facing
        products, new payment systems, security &amp; fraud prevention, and
        revenue assurance automation as the company went through a period of
        hyper-growth.
      </p>

      <p>
        During my time at Bulb their member base increased from 100,000 to over
        1.6 million.
      </p>

      <p>
        And before that I worked at{" "}
        <a href="https://goodlord.co" target="_blank" rel="noreferrer">
          Goodlord
        </a>
        , a proptech startup, building tools to streamline and take the pain out
        of renting a home. During my time I helped replatform their core tenancy
        service and build their new referencing system.
      </p>
    </article>
  );
};

export default Home;
