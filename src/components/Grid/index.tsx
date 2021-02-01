import * as React from "react";
import "./style.scss";

type RowProps = {
  children?: React.ReactNode;
};

export const Row = ({ children }: RowProps) => {
  return <div className="row">{children}</div>;
};

type ColProps = {
  children: React.ReactNode;
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
};

export const Col = ({ children, span }: ColProps) => {
  const colClassName = span ? `col-${span}` : "";
  return <div className={`col ${colClassName}`}>{children}</div>;
};
