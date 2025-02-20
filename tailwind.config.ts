import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background, 120, 100%, 98%))", // Light greenish background
        foreground: "hsl(var(--foreground, 120, 30%, 20%))", // Dark green for contrast
        card: {
          DEFAULT: "hsl(var(--card, 120, 40%, 90%))",
          foreground: "hsl(var(--card-foreground, 120, 40%, 20%))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover, 120, 50%, 95%))",
          foreground: "hsl(var(--popover-foreground, 120, 50%, 20%))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary, 140, 70%, 40%))", // Main green color
          foreground: "hsl(var(--primary-foreground, 140, 70%, 90%))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary, 150, 60%, 30%))", // Darker green
          foreground: "hsl(var(--secondary-foreground, 150, 60%, 85%))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted, 140, 20%, 70%))",
          foreground: "hsl(var(--muted-foreground, 140, 20%, 20%))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent, 140, 60%, 50%))", // Bright green accent
          foreground: "hsl(var(--accent-foreground, 140, 60%, 90%))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive, 0, 60%, 50%))", // Keeping red for destructive actions
          foreground: "hsl(var(--destructive-foreground, 0, 60%, 90%))",
        },
        border: "hsl(var(--border, 140, 20%, 40%))",
        input: "hsl(var(--input, 140, 20%, 30%))",
        ring: "hsl(var(--ring, 140, 80%, 40%))",
        chart: {
          "1": "hsl(var(--chart-1, 140, 70%, 50%))",
          "2": "hsl(var(--chart-2, 120, 50%, 60%))",
          "3": "hsl(var(--chart-3, 160, 60%, 50%))",
          "4": "hsl(var(--chart-4, 180, 50%, 40%))",
          "5": "hsl(var(--chart-5, 100, 50%, 40%))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,128,0,0.1), 0px 1px 0px 0px rgba(0,128,0,0.02), 0px 0px 0px 1px rgba(0,128,0,0.08)`, // Green shadow
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
};

export default config;
