import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Space Grotesk Variable", ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        main: "rgb(23 23 23)",
        "border-default": "rgb(45 45 45)",
      },
      textColor: {
        main: "#e5e5e5",
        secondary: "#a3a3a3",
      },
      borderColor: {
        default: "rgb(45 45 45)",
      },
    },
  },
  plugins: [],
};
