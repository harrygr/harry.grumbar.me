import { Project } from "~/components/Project";
import matchhausThumb from "~/assets/matchhaus.png";
import wordboiThumb from "~/assets//wordboi.svg";
import { HeadersFunction } from "@remix-run/node";

export const headers: HeadersFunction = () => {
  return {
    "Cache-Control": "max-age=300, s-maxage=1, stale-while-revalidate=8600",
  };
};

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
        <p>Here&apos;s a few projects I&apos;ve created or worked on:</p>

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
            It lets captains take control of their team&apos;s scheduling and
            team selection whilst offering players features such as team stats
            and player performances, fitness data integration and team voting
            ceremonies.
          </p>
          <p>There&apos;s a free and premium plan with a 1 month free trial.</p>
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
            It has its own dictionary of six-letter words. It&apos;s built in
            React using Next.js.
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
