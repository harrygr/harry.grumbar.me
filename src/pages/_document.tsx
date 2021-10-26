import NextDocument, { Html, Head, Main, NextScript } from "next/document";

class Document extends NextDocument {
  render() {
    return (
      <Html className="h-full">
        <Head>
          <link rel="icon" href="/favicon.svg" />
          <meta name="theme-color" content="#fff" />
        </Head>
        <body className="h-full antialiased font-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
