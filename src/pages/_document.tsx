import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script src="https://public.tableau.com/javascripts/api/tableau-2.8.0.min.js" type="text/javascript"></script>
        <link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Play:wght@400;700&display=swap" rel="stylesheet" />
        <meta charSet="utf-8" />
        <meta content="notranslate" name="google" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
