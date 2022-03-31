import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>

    </Head>
        <body>

          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}

export default CustomDocument;
