module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "false", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        "memories-purple": "#614b79",
        "memories-purple-15": "#E7E4EB",
        "memories-plum": "#774b69",
        "memories-plum-15": "#EBE4E9",
        "memories-apricot": "#b47257",
        "memories-apricot-15": "#F4EAE6",
        "memories-forest": "#546f56",
        "memories-forest-15": "#E5E9E6",
        "memories-navy": "#2a497e",
        "memories-navy-15": "#DFE4EC",
        "memories-mint": "#b0cfc4",
        "memories-mint-15": "#F3F8F6",
        "memories-pink": "#ad7393",
        "memories-pink-15": "#F3EAEF",
        "memories-ocean": "#4889c1",
        "memories-ocean-15": "#E4EDF6",
        "memories-goledn": "#9b7818",
        "memories-goledn-15": "#F0EBDC",
        "memories-grey": "#8e8e8e",
        "memories-grey-15": "#EEEEEE",
        "memories-background": "#f2f5f9",
        "memories-background-15": "#FDFEFE",
        "memories-dark-grey": "#606060",
        "memories-dark-grey-15": "#E7E7E7",
        "memories-black": "#000000",
        "memories-black-15": "#D9D9D9",
        "memories-white": "#fefeff",
        "memories-white-15": "#FFFFFF",
        "memories-magenta": "#CA3F7E",
        "memories-violet": "#814897",
        "memories-slate": "#6F6F6F",
        "memories-ocean-75": "#0578BF",
        "memories-green": "#008000",
        "memories-zomp": "#3BA38A",
        "memories-valentine-red": "#3BA38A",
        "memories-medium-sea-green": "#33A86F",
        "memories-black-coffe": "#3F3434",
        "memories-flax": "#DFDF8B",
        "memories-blond": "#F2F2BF",
        "memories-azureish-white": "#EFDFDA",
      },
      screens: {
        xxs: "355px",
        // => @media (min-width: 475px) { ... }
        xs: "475px",
        // => @media (min-width: 475px) { ... }
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "820px",
        // => @media (min-width: 768px) { ... }

        lg: "1190px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "mid-xl": "1380px",
        // => @media (min-width: 1350px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      gridTemplateRows: {
        // Simple 8 row grid
        10: "repeat(10, minmax(0, 1fr))",

        // Complex site-specific row configuration
        layout: "200px minmax(900px, 1fr) 100px",
      },
      gridTemplateColumns: {
        // Simple 18 column grid
        18: "repeat(18, minmax(0, 1fr))",

        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px",
      },
    },
  },
  fontFamily: {
    sans: ["proxima-nova", "sans-serif"],
    serif: ["Merriweather", "serif"],
  },
};
