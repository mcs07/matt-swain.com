import prism from "@theme-ui/prism/presets/github.json"

export default {
  space: [0, 4, 8, 16, 24, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    heading: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    monospace: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 30, 40, 48, 64],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  sizes: {
    container: 784,
  },
  colors: {
    text: "#333333",
    heading: "#000000",
    monospace: "#473d37",
    background: "#ffffff",
    background2: "#fafafa",
    card: "#f6f6f6",
    card2: "#ffffff",
    accent: "#ba00cf",
    primary: "#fa6400",
    secondary: "#fc9b5b",
    muted: "rgba(0, 0, 0, 0.4)",
  },
  text: {
    heading: {
      color: "text",
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
    body: {
      color: "text",
      fontSize: 3,
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    monospace: {
      variant: "text.body",
      color: "monospace",
      fontSize: 2,
      fontFamily: "monospace",
    },
    subtitle: {
      color: "muted",
      textTransform: "uppercase",
      fontWeight: 500,
      letterSpacing: "1px",
    },
  },
  links: {
    nav: {
      color: "muted",
      display: "inline-block",
      p: 3,
      fontSize: 1,
      fontWeight: 600,
      lineHeight: 1,
      textTransform: "uppercase",
      letterSpacing: "1px",
      textDecoration: "none",
      transition: "all .2s linear",
      ":hover,:focus": {
        color: "primary",
      },
      "&.active": {
        textDecoration: "2px solid",
      },
    },
    unstyled: {
      color: "inherit",
      textDecoration: "none",
    },
  },
  cards: {
    primary: {
      bg: "card",
      p: 4,
      mx: [-3, 0],
    },
    linked: {
      variant: "cards.primary",
      bg: "card2",
      boxShadow: "0 0 50px 8px rgba(0, 0, 0, 0.03)",
      transition: "all .2s linear",
      h4: {
        transition: "all .2s linear",
      },
      ":hover,:focus": {
        transform: "translateY(-4px)",
        boxShadow:
          "0 0 50px 8px rgba(0, 0, 0, 0.03), 0 30px 50px -30px rgba(0,0,0,0.5)",
        bg: "fafafa",
        h4: {
          color: "primary",
        },
      },
    },
  },
  styles: {
    root: {
      variant: "text.body",
      figure: {
        mx: [-3, 0],
        my: 4,
        textAlign: "center",
        figcaption: {
          color: "muted",
          fontSize: 2,
          mx: [3, 0],
        },
        "&.large": {
          mx: [-3, -3, -5, -7],
          figcaption: {
            mx: [3, 3, 5, 7],
          },
        },
      },
    },
    h1: {
      variant: "text.heading",
      fontSize: 6,
      fontWeight: 700,
      my: 4,
    },
    h2: {
      variant: "text.heading",
      fontSize: 5,
      my: 4,
    },
    h3: {
      variant: "text.heading",
      fontSize: 4,
      my: 4,
    },
    h4: {
      variant: "text.heading",
      fontSize: 3,
    },
    h5: {
      variant: "text.heading",
      fontSize: 2,
    },
    h6: {
      variant: "text.heading",
      fontSize: 1,
    },
    p: {
      variant: "text.body",
      my: 4,
    },
    a: {
      color: "primary",
      textDecoration: "none",
      transition: "all .2s linear",
      "&:hover": {
        color: "secondary",
      },
    },
    pre: {
      variant: "text.monospace",
      p: 4,
      my: 4,
      mx: [-3, 0],
      bg: "card",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
      "::-webkit-scrollbar": {
        height: "8px",
      },
      "::-webkit-scrollbar-track:horizontal": {
        background: "rgba(0, 0, 0, 0.1)",
      },
      "::-webkit-scrollbar-thumb:horizontal": {
        height: "10px",
        background: "rgba(0, 0, 0, 0.1)",
      },
    },
    code: {
      ...prism,
    },
    inlineCode: {
      variant: "text.monospace",
      padding: 1,
      bg: "card",
    },
    table: {
      my: 4,
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
    hr: {
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "text",
      opacity: 0.1,
      my: 4,
    },
  },
}
