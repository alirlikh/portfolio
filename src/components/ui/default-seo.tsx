import { DefaultSeo } from "next-seo"

const NextSeo = () => {
  return (
    <DefaultSeo
      title={"Alireza Jalili Potrfolio"}
      openGraph={{
        title: "Alireza Jalili Potrfolio",
        description:
          "Welcome to my portfolio! I'm Alireza Jalili, a frontend developer with a passion for creating beautiful and functional web experiences. Explore my projects showcasing my skills in HTML, CSS, JavaScript, and popular frameworks like React and Next.js. Let's connect and discuss how I can help bring your ideas to life on the web!",
        type: "website",
        locale: "en",
        site_name: "Alireza Jalili"
      }}
      additionalMetaTags={[
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1 maximum-scale=1"
        },
        {
          name: "theme-color",
          content: "#0c0c0d"
        }
      ]}
      additionalLinkTags={[
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png"
        },
        {
          rel: "icon",
          href: "/favicon.ico"
        },
        {
          rel: "icon",
          href: "/favicon-16x16.png",
          type: "image/png",
          sizes: "16x16"
        },

        {
          rel: "icon",
          href: "/favicon-32x32.png",
          type: "image/png",
          sizes: "32x32"
        },

        {
          rel: "manifest",
          href: "/manifest.json"
        }
      ]}
    />
  )
}

export default NextSeo
