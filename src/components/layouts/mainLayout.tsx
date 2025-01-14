import React from "react"
import Footer from "../footer/Footer"
import GoTop from "../goTop/GoTop"
import Header from "../header/Header"

export default function RootLayout({ children }: any) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <GoTop />
      <Footer />
    </>
  )
}
