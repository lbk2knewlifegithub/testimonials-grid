const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const { join } = require("path");

module.exports = {
  content: [join(__dirname, "src/**/*.{html,ts}")],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "4rem",
        xl: "10rem",
      },
    },
    extend: {
      fontFamily: {
        mono: ["'Barlow Semi Condensed'", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        "violet-900": "hsl(263, 55%, 52%)",
        "blue-900": "hsl(219, 29%, 14%)",
        "blue-800": "hsl(217, 19%, 35%)",
        "gray-900": "hsl(0, 0%, 81%)",
        "gray-800": "hsl(210, 46%, 95%)",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "1440px",
        },
      });
    }),
  ],
};
