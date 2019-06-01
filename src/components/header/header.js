import styled from "@emotion/styled"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import Image from "../image"
import Nav from "./nav"

const Header = ({ siteTitle }) => {
  const [scroll, setScroll] = useState(0)

  const scrollListener = () => {
    setScroll(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollListener)
  }, [])

  return (
    <StyledHeader scroll={scroll}>
      <h1 className="header__title-container">
        <Link className="header__title" to="/">
          {siteTitle}
        </Link>
      </h1>
      <Link className="header__logo-container" to="/">
        <Image className="header__logo" name={"geofire.png"} alt="logo" />
      </Link>
      <Nav scroll={scroll} />
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  align-items: center;
  padding: ${props => (props.scroll > 124 ? "2rem" : "3rem")};
  background: ${props => props.theme.color.gray_75};
  box-shadow: ${props =>
    props.scroll > 124 ? props.theme.shadow.box : "none"};
  transition: all 200ms ease-in;

  * {
    transition: all 200ms ease-in;
  }

  .header {
    &__logo-container {
      justify-self: center;
    }

    &__logo {
      height: ${props => (props.scroll > 124 ? "6rem" : "10rem")};
      width: ${props => (props.scroll > 124 ? "6rem" : "10rem")};
      margin-bottom: 0;
      margin-right: 2rem;
      display: inline-block;
      box-shadow: ${props => props.theme.shadow.box};
      border-radius: 50%;
    }


    &__title-container {
      margin: 0;
    }

    &__title {
      color: ${props => props.theme.color.red};
      font-size: ${props => (props.scroll > 124 ? "3rem" : "4rem")};
      ${props => props.theme.font.h1}
      ${props => props.theme.font.no_underline}
    }
  }
`
