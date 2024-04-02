import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    // extend: {
    //   backgroundImage: {
    //     "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
    //     "gradient-conic":
    //       "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    //   },
    // },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px"
    },
    colors: {
      "gray-900": `rgb(var(--color-gray-900)`,
      "gray-800": `rgb(var(--color-gray-800)`,
      "gray-700": `rgb(var(--color-gray-700)`,
      "gray-400": `rgb(var(--color-gray-400)`,
      "gray-300": `rgb(var(--color-gray-300)`,
      "green-300": `rgb(var(--color-green-500)`,
      "purple-300": `rgb(var(--color-purple-500)`,
      " white": `rgb(var(--color-white)`
    },
    fontFamily: {
      body: ["raleway-medium", "Open Sans"],
      heading: ["raleway-bold"]
    }
  },
  plugins: []
}
export default config
