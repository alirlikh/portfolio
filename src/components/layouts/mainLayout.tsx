import Footer from "../footer/Footer"
import Header from "../header/Header"

export default function RootLayout({ children }: any) {
  return (
    <div className="bg-gray-900 text-white h-full p-4 overflow-auto">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
