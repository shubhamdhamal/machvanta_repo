import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        "muted-foreground": "var(--muted-foreground)",
        ring: "var(--ring)",
        input: "var(--input)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        primary: { DEFAULT: "#06b6d4", dark: "#0891b2" },
        secondary: { DEFAULT: "#7c3aed", dark: "#6d28d9" },
        darkbg: "#0f172a",
      },
      animation: {
        "gradient-move": "gradient 8s linear infinite",
        "marquee": "marquee 20s linear infinite",
        "spotlight": "spotlight 2s ease .75s 1 forwards"
      },
      keyframes: {
        gradient: { "0%, 100%": { backgroundPosition: "0% 50%" }, "50%": { backgroundPosition: "100% 50%" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;