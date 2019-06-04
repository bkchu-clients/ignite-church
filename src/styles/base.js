import { css } from '@emotion/core';

export const mqMedium = (children) => css`
  @media only screen and (min-width: 600px) {
    ${children}
  }
`

export const mqLarge = (children) => css`
  @media only screen and (min-width: 1024px) {
    ${children}
  }
`

export const mqExLarge = (children) => css`
  @media only screen and (min-width: 1440px) {
    ${children}
  }
`