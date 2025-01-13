import type { Config } from "tailwindcss"

function withOpacity(variableName: any): any {
  return ({ opacityValue }: any) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    } else {
      return `rgb(var(${variableName}))`
    }
  }
}

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.19, 1, 0.22, 1)"
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        "2xl": "1536px"
      },
      colors: {
        "gray-900": withOpacity(`--color-gray-900`),
        "gray-850": withOpacity(`--color-gray-850`),
        "gray-800": withOpacity(`--color-gray-800`),
        "gray-700": withOpacity(`--color-gray-700`),
        "gray-400": withOpacity(`--color-gray-400`),
        "gray-300": withOpacity(`--color-gray-300`),
        "green-300": withOpacity(`--color-green-500`),
        "purple-300": withOpacity(`--color-purple-300`),
        "gray-scale": withOpacity(`--color-gray-scale`),
        white: withOpacity(`--color-white`)
      },
      fontFamily: {
        body: ["raleway-medium", "Open Sans"],
        heading: ["raleway-bold"]
      },
      lineHeight: {
        DEFAULT: "30px"
      },
      keyframes: {
        wave: {
          "0%, 60%, 100%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" }
        }
      },
      animation: {
        wave: "wave 2s "
      }
    }
  },
  plugins: []
}
export default config
