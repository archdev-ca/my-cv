import * as React from "react";
import "./style.scss";

type SectionProps = {
  title?: string;
  children?: React.ReactNode;
};

const Section = ({ children, title }: SectionProps) => {
  return (
    <section className="section-block">
      {!!title && <h2 className="title">{title}</h2>}
      <div className="body">{children}</div>
    </section>
  );
};

export default Section;
