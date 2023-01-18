import type { DocumentProps } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';

type Props = DocumentProps & {
  // add custom document props
};

export default class MyDocument extends Document<Props> {
  render() {

    return (
      <Html dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#141414" />
        </Head>
        <body className="bg-neutral-1000 text-colour-b3">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
