import * as React from "react";
import MainNav from "./../../components/MainNav";
import "./style.scss";

type DefaultLayoutProps = {
  children?: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="layout">
      <MainNav />
      <div className="container">{children}</div>
    </div>
  );
};

export default DefaultLayout;
