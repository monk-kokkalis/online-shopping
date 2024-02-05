import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'blue-link': '#23A6F0',
        'dark-grey': '#252B42',
        'green': '#23856D',
        'light-grey': '#737373',
        'muted-grey': '#BDBDBD',
        'faded-grey': '#e0e0e0',
        'red': '#d32f2f',
        'success': '#2DC071',
        'orange': '#E77C40'
      },
    },
  },
  plugins: [],
};
export default config;
