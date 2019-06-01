import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Nav = ({ scroll }) => {
  const links = ["Home", "About", "Contact", "Ministries"]
  return (
    <StyledNav scroll={scroll}>
      {links.map(link => (
        <Link
          key={link}
          className="nav__link"
          to={`/${link.toLocaleLowerCase()}`}
        >
          {link.toUpperCase()}
        </Link>
      ))}
    </StyledNav>
  )
}

export default Nav

const StyledNav = styled.div`
  display: flex;
  align-items: center;
  .nav {
    &__link {
      ${props => props.theme.font.no_underline}
      ${props => props.theme.font.h2}
      
      padding: 0 1rem;
      color: ${props => props.theme.color.gray_25};
      font-size: 2rem;
      /* font-size: ${props => (props.scroll > 124 ? "2rem" : "4rem")}; */

      &:last-of-type {
        padding-right: 0;
      }
    }
  }
`
