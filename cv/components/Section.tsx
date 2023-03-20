import * as React from "react";

interface SectionProps {
  title?: string;
  date: string;
  location: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  date,
  location,
}) => {
  return (
    <section>
      <header>
        <h3>{location}</h3>
        <p>
          {title ? `${title} / ` : ""}
          {date}
        </p>
      </header>
      {children ? <article>{children}</article> : null}
    </section>
  );
};
