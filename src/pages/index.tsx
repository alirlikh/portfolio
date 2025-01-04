import FooterSlider from "@/components/footerSlider/FooterSlider"
import Banner from "@/components/banner/Banner"
import SliderSection from "@/components/sliderSection/SliderSection"
import Introduce from "@/components/introduce/Intruduce"

export default function Home() {
  return (
    <>
      <Introduce />
      <SliderSection />
      <Banner />
      <FooterSlider />
    </>
  )
}
