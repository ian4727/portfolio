const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
        "sans": ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
    },
    colors: {
        // "pink": "#f1bbd5",
        "pink": "#FDBCD5",
        // "pink": "#aadcec",
        "blue": "#C1F5FF",
        "lines": "#01949A",
        // "darkblue": "#4c5c8c",
        "darkblue": "#578384",
        "custom": "linear-gradient(90deg, rgba(87,131,132,1) 28%, rgba(253,188,213,1) 72%, rgba(255,255,255,1) 100%)",
    },
  },
  plugins: [],
});
