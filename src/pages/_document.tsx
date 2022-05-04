import NextDocument, { Html, Head, Main, NextScript } from "next/document";

class Document extends NextDocument {
  render() {
    return (
      <Html className="h-full">
        <Head>
          <link rel="icon" href="/favicon.svg" />
          <meta name="theme-color" content="#fff" />
          <script
            async
            defer
            data-website-id="049a950f-3150-4194-a086-64da434ce6d1"
            src="https://umami-hg.fly.dev/umami.js"
          ></script>
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
