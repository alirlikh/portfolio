import type { AppProps } from "next/app"
import "../assets/globals.css"
import RootLayout from "../components/layouts/mainLayout"
import NextSeo from "@/components/ui/default-seo"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <NextSeo />
      <Component {...pageProps} />
    </RootLayout>
  )
}
