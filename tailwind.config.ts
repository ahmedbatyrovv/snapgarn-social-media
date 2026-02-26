import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        dark: {
          1: "#09090A",
          2: "#101012",
          3: "#1A1A1D",
          4: "#2A2A2F",
        },

        primary: {
          500: "#6366F1",
        },

        light: {
          1: "#FFFFFF",
          3: "#E5E7EB",
          4: "#9CA3AF",
        },

        red: "#EF4444",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      screens: {
        xs: "480px",
      },

      width: {
        465: "465px",
      },
    },
  },

  plugins: [],
};

export default config;
