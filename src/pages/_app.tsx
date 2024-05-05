import type { AppProps } from "next/app"
import "../assets/globals.css"
import RootLayout from "../components/layouts/mainLayout"
import NextSeo from "@/components/ui/default-seo"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Loader from "@/components/loader/loader"

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    router.events.on("routeChangeError", (e) => setLoading(false))
    router.events.on("routeChangeStart", (e) => setLoading(true))
    router.events.on("routeChangeComplete", (e) => setLoading(false))

    return () => {
      router.events.off("routeChangeError", (e) => setLoading(false))
      router.events.off("routeChangeStart", (e) => setLoading(true))
      router.events.off("routeChangeComplete", (e) => setLoading(false))
    }
  }, [router.events])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <RootLayout>
          <NextSeo />
          <Component {...pageProps} />
        </RootLayout>
      )}
    </>
  )
}
