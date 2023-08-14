const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./hugo_stats.json", "./layouts/**/*.html"],
  darkMode: "class",
  experimental: {
    optimizeUniversalDefaults: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
      },
      screens: {
        "3xl": "1792px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
