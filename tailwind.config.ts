import { type Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F4C81",
        secondary: "#3A0068",
      },
    },
  },
  plugins: [],
} satisfies Config;
