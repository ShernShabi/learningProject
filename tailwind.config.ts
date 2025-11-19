import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1FCF7A",
        accentPurple: "#E4D5FF",
        accentOrange: "#FFE4C7",
        softGray: "#F5F7FB",
        textMuted: "#6B7280",
      },
      boxShadow: {
        soft: "0 20px 45px rgba(31, 207, 122, 0.15)",
        card: "0 20px 40px rgba(15, 23, 42, 0.1)",
      },
      backgroundImage: {
        "grid-pattern":
          "radial-gradient(circle at center, rgba(107,114,128,0.12) 0, rgba(255,255,255,0) 60%)",
      },
      keyframes: {
        float1: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        float2: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(6px)" },
        },
        float3: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        float1: "float1 11s ease-in-out infinite",
        float2: "float2 13s ease-in-out infinite",
        float3: "float3 15s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

