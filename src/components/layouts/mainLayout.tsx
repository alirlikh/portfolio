import Footer from "../footer/Footer"

export default function RootLayout({ children }: any) {
  return (
    <div className="bg-gray-900 text-white h-96 ">
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}
