import Footer from "../footer/Footer"
import Header from "../header/Header"

export default function RootLayout({ children }: any) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
