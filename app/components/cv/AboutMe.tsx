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
        I&apos;m a full-stack product engineer with strengths working in agile
        teams using industry-standard tools and libraries with over{" "}
        {yearsExperience} years&apos; experience building and delivering
        software professionally.
      </p>
      <p>
        I have experience modeling complex domains for backend systems and a
        focus on testable and predictable code is core to my programming
        principles. I&apos;m a strong proponent of functional programming in
        modern scalable applications and believe it results in fewer bugs,
        easier testing and more comprehensible code.
      </p>
      <p>
        I&apos;ve led small product engineering teams and have extensive
        experience with prioritising workloads, managing backlogs, and working
        collaboratively with product to effectively deliver working software.
      </p>
    </section>
  );
};
