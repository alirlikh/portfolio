import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document"

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return Document.getInitialProps(ctx)
  }
  render() {
    return (
      <Html>
        <Head />
        <body dir="ltr">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
