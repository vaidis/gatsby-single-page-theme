import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #ff6000;
    height: 1px;
    transition: all 0.4s ease-in;
  }
  :hover {
    color: #ff6000;
    ::after {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const NavbarLinks = ({ toggleNavbar }) => {
  return (
    <>
      <NavItem onClick={toggleNavbar} to="/#home">Home</NavItem>
      <NavItem onClick={toggleNavbar} to="/#about">Company</NavItem>
      <NavItem onClick={toggleNavbar} to="/#work">Work</NavItem>
      <NavItem onClick={toggleNavbar} to="/#contact">Contact</NavItem>
    </>
  )
}

export default NavbarLinks
