import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // secondary: "#F13024",
        secondary: "#1c4ff5",
      },
      backgroundImage: {
        explosion: "url('/assets/bg-explosion.png')",
      },
      // animation: {
      //   "bounce-slow": "bounce 3s infinite ",
      // },
    },
  },
  plugins: [],
};
export default config;
