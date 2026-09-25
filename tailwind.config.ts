import type { Config } from "tailwindcss";

// Design tokens ported 1:1 from the approved Google Stitch design system
// ("Obsidian Aurum") — see stitch_prompt_execution_engine/obsidian_aurum/DESIGN.md
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
  "colors": {
    "surface-raised": "#111318",
    "secondary-fixed-dim": "#c2c1ff",
    "primary-container": "#c8a96b",
    "on-secondary-fixed": "#0d006a",
    "primary-fixed": "#ffdea0",
    "on-tertiary": "#222f53",
    "surface": "#121315",
    "surface-tint": "#e3c282",
    "on-error-container": "#ffdad6",
    "surface-container-high": "#292a2c",
    "surface-base": "#08090B",
    "on-secondary-fixed-variant": "#362fb7",
    "on-primary-fixed": "#261a00",
    "on-surface-variant": "#d0c5b5",
    "inverse-surface": "#e3e2e5",
    "primary": "#e5c484",
    "outline-variant": "#4d463a",
    "inverse-on-surface": "#303033",
    "on-surface": "#e3e2e5",
    "text-primary": "#F5F3EE",
    "on-primary-fixed-variant": "#5a430f",
    "on-secondary-container": "#aeadff",
    "secondary-container": "#362fb7",
    "inverse-primary": "#735b25",
    "surface-container-low": "#1b1c1e",
    "tertiary": "#bac7f4",
    "surface-elevated": "#17191F",
    "tertiary-fixed": "#dae1ff",
    "on-tertiary-fixed": "#0b1a3d",
    "on-primary": "#402d00",
    "on-secondary": "#1c06a2",
    "tertiary-fixed-dim": "#b8c5f2",
    "surface-bright": "#38393b",
    "tertiary-container": "#9facd7",
    "background": "#121315",
    "outline": "#998f81",
    "error-container": "#93000a",
    "primary-fixed-dim": "#e3c282",
    "surface-container-lowest": "#0d0e10",
    "text-secondary": "#9B9DA5",
    "surface-variant": "#343537",
    "surface-container": "#1f2022",
    "secondary": "#c2c1ff",
    "surface-dim": "#121315",
    "error": "#ffb4ab",
    "on-tertiary-container": "#334064",
    "on-primary-container": "#533d09",
    "secondary-fixed": "#e2dfff",
    "on-tertiary-fixed-variant": "#39466b",
    "surface-container-highest": "#343537",
    "on-error": "#690005",
    "on-background": "#e3e2e5",
    "border-hairline": "#272A31"
  },
  "spacing": {
    "space-sm": "0.5rem",
    "gutter-mobile": "1rem",
    "space-lg": "2rem",
    "margin-mobile": "1.25rem",
    "space-xs": "0.25rem",
    "space-md": "1rem",
    "gutter": "1.5rem",
    "space-xl": "4rem",
    "margin-tablet": "2rem",
    "margin": "4rem"
  },
  "borderRadius": {
    "DEFAULT": "0.125rem",
    "lg": "0.25rem",
    "xl": "0.5rem",
    "full": "0.75rem"
  },
  "fontFamily": {
    "body-md": [
      "Space Grotesk"
    ],
    "headline-lg-mobile": [
      "Syne"
    ],
    "display-hero": [
      "Syne"
    ],
    "label-caps": [
      "JetBrains Mono"
    ],
    "display-hero-mobile": [
      "Syne"
    ],
    "headline-md": [
      "Syne"
    ],
    "label-code": [
      "JetBrains Mono"
    ],
    "body-lg": [
      "Space Grotesk"
    ],
    "body-sm": [
      "Space Grotesk"
    ],
    "headline-lg": [
      "Syne"
    ],
    "headline-sm": [
      "Syne"
    ],
    "button-text": [
      "Space Grotesk"
    ]
  },
  "fontSize": {
    "body-md": [
      "15px",
      {
        "lineHeight": "24px",
        "letterSpacing": "0em",
        "fontWeight": "400"
      }
    ],
    "headline-lg-mobile": [
      "30px",
      {
        "lineHeight": "36px",
        "letterSpacing": "-0.02em",
        "fontWeight": "600"
      }
    ],
    "display-hero": [
      "72px",
      {
        "lineHeight": "80px",
        "letterSpacing": "-0.04em",
        "fontWeight": "700"
      }
    ],
    "label-caps": [
      "11px",
      {
        "lineHeight": "14px",
        "letterSpacing": "0.12em",
        "fontWeight": "600"
      }
    ],
    "display-hero-mobile": [
      "40px",
      {
        "lineHeight": "46px",
        "letterSpacing": "-0.03em",
        "fontWeight": "700"
      }
    ],
    "headline-md": [
      "32px",
      {
        "lineHeight": "40px",
        "letterSpacing": "-0.02em",
        "fontWeight": "600"
      }
    ],
    "label-code": [
      "12px",
      {
        "lineHeight": "16px",
        "letterSpacing": "0.06em",
        "fontWeight": "500"
      }
    ],
    "body-lg": [
      "18px",
      {
        "lineHeight": "30px",
        "letterSpacing": "-0.01em",
        "fontWeight": "400"
      }
    ],
    "body-sm": [
      "13px",
      {
        "lineHeight": "20px",
        "letterSpacing": "0.01em",
        "fontWeight": "400"
      }
    ],
    "headline-lg": [
      "48px",
      {
        "lineHeight": "56px",
        "letterSpacing": "-0.03em",
        "fontWeight": "600"
      }
    ],
    "headline-sm": [
      "22px",
      {
        "lineHeight": "28px",
        "letterSpacing": "-0.01em",
        "fontWeight": "500"
      }
    ],
    "button-text": [
      "14px",
      {
        "lineHeight": "18px",
        "letterSpacing": "0.02em",
        "fontWeight": "600"
      }
    ]
  }
},
  },
  plugins: [],
};

export default config;
