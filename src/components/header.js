import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div className="header__container">
      <h1 className="header__title-container">
        <Link className="header__title" to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const StyledHeader = styled.header`
  background: ${props => props.theme.color.gray_25};
  margin-bottom: 1.45rem;

  .header {
    &__container {
      margin: 0 auto;
      max-width: 960px;
      padding: 1.45rem 1.0875rem;
    }

    &__title-container {
      margin: 0;
      text-align: center;
    }

    &__title {
      color: ${props => props.theme.color.red};
      ${props => props.theme.font.header}
      ${props => props.theme.font.no_underline}
    }
  }
`
