import differenceInYears from "date-fns/differenceInYears";

import React from "react";

export const metadata = {
  title: "Harry Grumbar | London-based product engineer",
  description:
    "Harry Grumbar is a product engineer and technical co-founder based in London with skills in front and back-end web development, cloud services and agile working methods. He has experience delivering high-quality software to millions of users across a range of industries.",
};

const Home = () => {
  const yearsExperience = React.useMemo(
    () => differenceInYears(new Date(Date.now()), new Date(2014, 6, 1)),
    []
  );

  return (
    <article className="prose">
      <p>
        Hi, I'm Harry, a London-based product engineer and technical co-founder
        who loves to build tech products that enhances peoples' lives.
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
        In a previous role I worked at{" "}
        <a
          href="https://bulb.co.uk"
          target="_blank"
          title="Bulb"
          rel="noreferrer"
        >
          Bulb
        </a>{" "}
        when it was the fastest growing company in the UK. I spent over 3 years
        building Bulb's core member-facing products, new payment systems,
        security &amp; fraud prevention, and revenue assurance automation as the
        company went through a period of hyper-growth.
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
