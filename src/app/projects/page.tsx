import { Project } from "./_components/project";
import matchhausThumb from "./_images/matchhaus.png";
import wordboiThumb from "./_images/wordboi.svg";

export const metadata = {
  title: "Harry Grumbar | Projects",
  description: "Projects that Harry has created and worked or",
};

const Projects = () => {
  return (
    <div>
      <header className="w-full mb-8">
        <h1 className="text-4xl font-bold tracking-tighter text-gray-800">
          Projects
        </h1>
      </header>
      <article className="space-y-10">
        <p>Here's a few projects I've created or worked on:</p>

        <Project
          name="Matchhaus"
          link="https://matchhaus.io"
          linkText="matchhaus.io"
          image={matchhausThumb}
        >
          <p>
            Matchhaus is a community and organiser for team sports (like
            football, hockey etc).
          </p>
          <p>
            It lets captains take control of their team's scheduling and team
            selection whilst offering players features such as team stats and
            player performances, fitness data integration and team voting
            ceremonies.
          </p>
          <p>There's a free and premium plan with a 1 month free trial.</p>
        </Project>
        <Project
          name="Wordboi"
          link="https://wordboi.vercel.app"
          linkText="Wordboi"
          image={wordboiThumb}
        >
          <p>
            Wordboi is a clone of the popular word game Wordle, except it uses
            six-letter words.
          </p>
          <p>
            It has its own dictionary of six-letter words. It's built in React
            using Next.js.
          </p>
          <p>
            The source code is{" "}
            <a
              href="https://github.com/harrygr/wordboi"
              target="_blank"
              rel="noreferrer"
            >
              available on GitHub
            </a>
            .
          </p>
        </Project>
      </article>
    </div>
  );
};

export default Projects;
