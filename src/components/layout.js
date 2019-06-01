/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { globalStyles, theme } from "../styles/theme";
import Header from "./header/header";
import "./layout.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            css={css`
              margin: 0 auto;
              max-width: 960px;
              padding: 15.75rem 0 1.45rem 0;
            `}
          >
            <main>{children}</main>
            <main>{children}</main>
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built by
              {` `}
              <a href="https://bkchu.github.io/">Brandon Chung</a>
            </footer>
          </div>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
