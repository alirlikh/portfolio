import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document"

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return Document.getInitialProps(ctx)
  }
  render() {
    return (
      <Html>
        <Head />
        <body dir="ltr" className="bg-gray-900 text-white h-full p-4 overflow-auto">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
