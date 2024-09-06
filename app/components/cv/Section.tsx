import * as React from "react";

interface SectionProps {
  title?: string;
  date: string;
  location: string;
  children?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  date,
  location,
}) => {
  return (
    <section style={{ marginBottom: "20px" }}>
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
