import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html", // Adicionando index.html (necessário para Vite)
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Garante que toda a pasta src seja escaneada
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        tn_yellow: "#FFCE04",
        tn_brown: "#240E0B",
        tn_black: "#000000",
        tn_gray: "#615A5A",
        tn_white: "#FFFFFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
