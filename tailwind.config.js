const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
        "sans": ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
    },
    colors: {
        "pink": "#f0bbd4",
        // "pink": "#aadcec",
        "blue": "#C1F5FF",
        "purple": "#eed2ff",
        "darkblue": "#4c5c8c",
        "custom-gradient": "var(--custom-gradient)",
    },
  },
  plugins: [],
});
