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
        I'm a full-stack developer based in London. I have strengths in
        front-end development using popular libraries and over {yearsExperience}{" "}
        years' experience building and delivering software.
      </p>
      <p>
        Having worked in highly FP-oriented teams I am a strong proponent of
        functional programming in modern scalable applications. A focus on
        testable and predictable code is core to my programming principles.
      </p>
      <p>
        When building for the front-end I enjoy using React with which I work
        with almost exclusively in TypeScript. I am a strong believer that a
        modern type system and compiler brings many benefits to the reliability
        of one's code and helps and greatly reduces the number of errors.
      </p>
      <p>
        When I'm not building React apps I also enjoy tinkering with server
        applications in Node and Elixir as well as working on open-source
        projects.
      </p>
    </section>
  );
};
