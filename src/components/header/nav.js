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
  justify-content: flex-end;
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

      &:after {
        content: "";
        display: block;
        width: 20px;
        height: 2px;
        margin-top: 2px;
        background-color: ${props => props.theme.color.red};
        transition: all 0.4s;
      }
      &:hover:after {
        width: 100%;
      }
      &[nounderline]:after {
        display: none;
      }
    }
  }
`
