import * as React from "react";

type PageProps = {
  layout: React.FunctionComponent;
  page: React.FunctionComponent;
};

const Page = ({ layout, page }: PageProps) => {
  const Layout = layout;
  const Page = page;
  return (
    <Layout>
      <Page />
    </Layout>
  );
};

export default Page;
