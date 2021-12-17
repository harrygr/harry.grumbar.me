import * as React from "react";

import { AboutMe } from "./AboutMe";
import { Goodlord } from "./experience/Goodlord";
import { Bulb } from "./experience/Bulb";
import { Section } from "./components/Section";
import { IconListItem } from "./components/IconListItem";
import { Matchhaus } from "./experience/Matchhaus";

export function App() {
  return (
    <div className="container">
      <h1>Harry Grumbar</h1>
      <div className="grid">
        <main className="cell" style={{ flex: 2, paddingRight: 10 }}>
          <AboutMe />
          <hr />

          <h2 id="experience">Experience</h2>

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
            I'm a keen sportsman and particularly enjoy cycling, tennis, hockey
            and football. I love the outdoors; one of my passions is
            back-country skiing and ski-touring, when travel and conditions
            allow it!
          </p>
        </main>
        <aside className="cell" style={{ paddingLeft: 10 }}>
          <h2 id="contact">Contact</h2>
          <ul className="list-reset">
            <IconListItem icon="map-marker">London, UK</IconListItem>
            <IconListItem icon="envelope-o">harry@grumbar.me</IconListItem>
            <IconListItem icon="github">
              <a href="https://github.com/harrygr">github.com/harrygr</a>
            </IconListItem>
            <IconListItem icon="stack-overflow">
              <a href="https://stackoverflow.com/story/harryg">
                stackoverflow.com/story/harryg
              </a>
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
            <li>React/Next.js</li>
            <li>Kubernetes</li>
            <li>Elixir/Phoenix</li>
            <li>GraphQL/REST API design</li>
            <li>Docker</li>
            <li>Git</li>
            <li>GCP/AWS/Cloud</li>
            <li>Agile Methodologies (Scrum/Kanban)</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
