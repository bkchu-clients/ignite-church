import { css } from "@emotion/core"

export const theme = {
  color: {
    red: "#E32B4E",
    gray_75: "#EDF2F4",
    gray_50: "#8D99AE",
    gray_25: "#2B2D42",
    white: "#FFF",
    orange: "#F08700",
  },
  font: {
    h1: css`
      font-family: "Roboto Condensed";
      font-weight: bold;
      letter-spacing: 0.5rem;
    `,
    h2: css`
      font-family: "Roboto Condensed";
      font-weight: normal;
      font-size: 5rem;
      letter-spacing: 0.5rem;
    `,
    no_underline: css`
      text-decoration: none;
    `,
  },
  shadow: {
    box: "0 0 0 1px rgba(255,255,255,.1), 0 2px 4px 0 rgba(14,30,37,.12)",
  },
}

export const globalStyles = css`
  body {
    background: ${theme.color.gray_75};
  }
`
