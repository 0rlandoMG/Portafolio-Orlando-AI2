/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0A0A0B",
          bgLight: "#FAFAF9",
          surface: "#141415",
          surfaceLight: "#FFFFFF",
          border: "#232325",
          borderLight: "#E7E5E4",
          text: "#F5F5F4",
          textLight: "#0C0C0D",
          muted: "#8B8B8D",
          mutedLight: "#6B6B6E",
          mint: "#5EEAD4",
          mintDim: "#2DBFA3",
          green: "#7EE0A8",
          amber: "#F5B94D",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 45px -20px rgba(0, 0, 0, 0.45)",
        glow: "0 0 0 1px rgba(94, 234, 212, 0.18), 0 12px 40px -12px rgba(94, 234, 212, 0.18)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1.1s steps(1) infinite",
      },
    },
  },
  plugins: [],
};
