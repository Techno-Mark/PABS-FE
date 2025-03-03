import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Centers the container
        padding: "1rem", // Adds some padding on smaller screens
      },
      maxWidth: {
        sm: "640px", // Small screens
        md: "768px", // Medium screens
        lg: "1024px", // Large screens
        xl: "1280px", // Extra large screens
        "2xl": "1440px", // 2XL screens
      },
    },
  },
  plugins: [],
};

export default config;
