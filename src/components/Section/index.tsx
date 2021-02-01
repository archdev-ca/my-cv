import * as React from "react";
import "./style.scss";

type SectionProps = {
  title: string;
};

const Section = ({ title }: SectionProps) => {
  return (
    <section className="section-block">
      <h2 className="title">{title}</h2>
    </section>
  );
};

export default Section;
