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
    header: css`
      font-family: "Roboto Condensed";
      font-weight: bold;
      letter-spacing: 0.5rem;
    `,
    no_underline: css`
      text-decoration: none;
    `,
  },
}

export const globalStyles = css`
  body {
    background: ${theme.color.gray_75};
  }
`
