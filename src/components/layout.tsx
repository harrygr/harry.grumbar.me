import Head from "next/head";
import * as React from "react";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Harry Grumbar</title>
      </Head>
      {children}
    </>
  );
};
