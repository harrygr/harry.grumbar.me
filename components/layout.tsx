import Head from "next/head";
import * as React from "react";

interface Props {}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="font-body min-h-screen">
      <Head>
        <title>Harry Grumbar</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </div>
  );
};
