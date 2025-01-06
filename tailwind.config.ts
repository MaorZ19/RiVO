import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#2E7D32",
        secondary: "#4CAF50",
        accent: "#81C784",
        background: "#F1F8E9",
        surface: "#FFFFFF",
        muted: "#C8E6C9",
        "muted-foreground": "#558B2F",
        border: "#A5D6A7",
        input: "#E8F5E9",
        foreground: "hsl(var(--foreground))",
      },
      textColor: {
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        sans: ["SF Pro Display", "system-ui", "sans-serif"],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      rotate: {
        'y-12': '12deg',
      },
      perspective: {
        '1000': '1000px',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities }) {
      addUtilities({
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.rotate-y-12': {
          transform: 'rotateY(12deg)',
        },
      });
    },
  ],
} satisfies Config;