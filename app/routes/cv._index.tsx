import { HeadersFunction, LinksFunction, MetaFunction } from "@remix-run/node";
import { AboutMe } from "~/components/cv/AboutMe";
import { Bulb } from "~/components/cv/experience/Bulb";
import { Goodlord } from "~/components/cv/experience/Goodlord";
import { Matchhaus } from "~/components/cv/experience/Matchhaus";
import { Scan } from "~/components/cv/experience/Scan";
import { Section } from "~/components/cv/Section";
import { IconListItem } from "~/components/IconListItem";
import "~/styles/cv.css";

export const headers: HeadersFunction = () => {
  return {
    "Cache-Control": "max-age=300, s-maxage=1, stale-while-revalidate=8600",
  };
};

export const meta: MetaFunction = () => [{ title: "Harry Grumbar | CV" }];

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/hack/0.8.0/hack.css",
  },
  {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600;700&display=swap",
  },
];

const CV = () => {
  return (
    <body className="hack">
      <div className="container">
        <h1>Harry Grumbar</h1>
        <div className="grid">
          <main className="cell" style={{ flex: 2, paddingRight: 10 }}>
            <AboutMe />
            <hr />

            <h2 id="experience">Experience</h2>

            <Section
              date="May 2022 - July 2024"
              location="Scan.com"
              title="Software Engineering Consultant"
            >
              <Scan />
            </Section>

            <Section
              title="Co-founder/CTO"
              date="October 2021 - Present"
              location="Matchhaus"
            >
              <Matchhaus />
            </Section>

            <Section
              title="Senior Software Engineer"
              date="May 2018 - September 2021"
              location="Bulb"
            >
              <Bulb />
            </Section>

            <Section
              title="Software Engineer"
              date="May 2016 - May 2018"
              location="Goodlord"
            >
              <Goodlord />
            </Section>

            <hr />

            <h2 id="education">Education</h2>

            <Section
              title="Investment Management Certificate"
              date="2011"
              location="CFA Society UK"
            />
            <Section
              title="Master of Engineering, Civil Engineering"
              date="October 2006 - June 2010"
              location="University of Bristol"
            />

            <hr />

            <h2 id="skills-and-interests">Skills and Interests</h2>

            <p>
              I love the outdoors. Amoung my passions is backcountry skiing,
              ski-mountaineering, trail running and mountain sports in general.
              I&apos;ve climbed several 4000ers in the Alps; Mont Blanc and the
              Matterhorn being among them. I like to keep fit and healthy when
              not building tech products.
            </p>
            <p>
              I also enjoy other sports such as football, tennis and road
              cycling.
            </p>
          </main>
          <aside className="cell" style={{ paddingLeft: 10 }}>
            <h2 id="contact">Contact</h2>
            <ul className="list-reset" style={{ listStyleType: "none" }}>
              <IconListItem icon="map-marker">London, UK</IconListItem>
              <IconListItem icon="envelope-o">harry@grumbar.me</IconListItem>
              <IconListItem icon="globe">
                <a href="https://harry.grumbar.me">harry.grumbar.me</a>
              </IconListItem>
              <IconListItem icon="github">
                <a href="https://github.com/harrygr">github.com/harrygr</a>
              </IconListItem>
            </ul>

            <h2 id="languages">Languages</h2>
            <ul>
              <li>English (native)</li>
              <li>French (intermediate)</li>
            </ul>
            <h2 id="programming">Programming</h2>

            <ul>
              <li>JavaScript/TypeScript/Node</li>
              <li>Ruby/Rails</li>
              <li>React/Next.js/Remix</li>
              <li>Kubernetes</li>
              <li>Elixir/Phoenix</li>
              <li>Relational databases incl. PostgreSQL/MySQL</li>
              <li>GraphQL/REST API design</li>
              <li>Docker</li>
              <li>Git</li>
              <li>GCP/AWS/Cloud</li>
              <li>Agile Methodologies (Scrum/Kanban)</li>
            </ul>
          </aside>
        </div>
      </div>
    </body>
  );
};

export default CV;
