import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#18181b" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="icon" href="/favicon/favicon.ico" />
          <link rel="manifest" href="/site.webmanifest"></link>
        </Head>
        <body className="bg-zinc-900 text-white antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
