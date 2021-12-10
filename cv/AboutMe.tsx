import * as React from "react";
import * as df from "date-fns";

export const AboutMe: React.FC = () => {
  const yearsExperience = React.useMemo(
    () => df.differenceInYears(new Date(Date.now()), new Date(2014, 6, 1)),
    []
  );

  return (
    <section>
      <h2 id="about-me">About Me</h2>
      <p>
        I'm a software engineer based in London. I have strengths working in
        agile teams using industry-standard tools and libraries with over{" "}
        {yearsExperience} years' experience building and delivering software.
      </p>
      <p>
        I have experience modeling complex domains for backend systems and a
        focus on testable and predictable code is core to my programming
        principles. I'm a strong proponent of functional programming in modern
        scalable applications and believe it results in fewer bugs, easier
        testing and more comprehensible code.
      </p>
      <p>
        When building for the front-end I enjoy using React with which I work
        with almost exclusively in TypeScript. I am a strong believer that a
        modern type system and compiler brings many benefits to the reliability
        of one's code and helps and greatly reduces the number of errors.
      </p>
      <p>
        For the backend I have extensive experience building Node server
        applications with microservice architectures, although I am a proponent
        of using monolithic backends when the situation calls for it. For this
        I've found I can be very productive with Elixir's Phoenix framework.
      </p>
    </section>
  );
};
