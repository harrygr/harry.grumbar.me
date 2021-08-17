import * as React from "react";

import { AboutMe } from "./AboutMe";
import { Goodlord } from "./experience/Goodlord";
import { Bulb } from "./experience/Bulb";
import { Section } from "./components/Section";
import { IconListItem } from "./components/IconListItem";

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
            title="Software Engineer"
            date="May 2018 - Present"
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
            I enjoy spending my time keeping up to speed with the latest
            developments in tech and the software startup world as well as
            trying to further my programming abilities such as delving into
            category theory and FP principles.
          </p>
          <p>
            I am also a keen sportsman and particularly enjoy cycling, tennis,
            skiing, and football as well as being an avid traveller.
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
            <li>JavaScript/Node</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Kubernetes</li>
            <li>Elixir/Phoenix</li>
            <li>Elm</li>
            <li>Docker</li>
            <li>Git</li>
            <li>GCP/AWS/Cloud</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
