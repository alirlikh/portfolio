import type { AppProps } from "next/app"
import "../assets/globals.css"
import RootLayout from "../components/layouts/mainLayout"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}
