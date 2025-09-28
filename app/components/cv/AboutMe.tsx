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
        I&apos;m a full-stack product engineer with {yearsExperience}+ years of
        experience building and delivering software professionally. I excel at
        working in agile teams using industry-standard tools and libraries.
      </p>
      <p>
        I have extensive experience modeling complex domains for backend
        systems. A focus on testable and predictable code is core to my
        programming principles. I&apos;m a strong advocate for functional
        programming in modern scalable applications, which I believe results in
        fewer bugs, easier testing, and more maintainable code.
      </p>
      <p>
        I believe in keeping solutions simple and choosing the right tool for
        each specific problem rather than adding unnecessary complexity.
        I&apos;m pragmatic about technology choices, preferring proven tools
        over shiny new ones when they better serve a project&apos;s needs.
      </p>
      <p>
        I&apos;ve led small product engineering teams with a track record of
        prioritizing workloads, managing backlogs, and collaborating effectively
        with product teams to deliver working software that meets business
        objectives.
      </p>
    </section>
  );
};
