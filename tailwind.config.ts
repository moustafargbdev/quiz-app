import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#4461F2",
        "primary-light": "#F0F4FC",
        light: "#6C737F",
        logo: "#122D9C",
        danger: "#F04438",
      },
    },
  },
  plugins: [],
} satisfies Config;
