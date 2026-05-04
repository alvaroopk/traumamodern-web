import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Color principal — Azul medical confianza
          primary: "#1B3A6B",
          // Color secundario — Azul claro tecnológico
          secondary: "#2D7DD2",
          // Color de acento — Verde acción / WhatsApp
          accent: "#10B981",
          // WhatsApp oficial
          whatsapp: "#25D366",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F7FAFC",
        },
        ink: {
          DEFAULT: "#0F172A",
          muted: "#475569",
        },
        line: "#E2E8F0",
        danger: "#DC2626",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "12px",
        md: "10px",
        sm: "8px",
      },
      boxShadow: {
        card: "0 1px 2px 0 rgb(15 23 42 / 0.04), 0 1px 3px 0 rgb(15 23 42 / 0.06)",
        cardHover:
          "0 4px 6px -1px rgb(15 23 42 / 0.08), 0 2px 4px -2px rgb(15 23 42 / 0.04)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #EBF2FB 0%, #FFFFFF 60%, #FFFFFF 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
