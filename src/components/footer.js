import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const FooterSection = styled.div`
    width: 100%;
    background: #000000;
    color: #ffffff;
    font-family: "Ubuntu";
    font-size: 12px;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
`
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
    padding: 5px 0;
    z-index: 6;
`

const Footer = () => {
  return (
    <FooterSection>
      Ste Vaidis Gatsby Single Page Theme
      <NavItem to="/policy">Privacy Policy</NavItem>
      <NavItem to="/terms">Terms of Service</NavItem>
    </FooterSection>
  )
}

export default Footer
