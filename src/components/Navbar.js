import React, { useState } from "react"
import styled from "styled-components"

import NavbarLinks from "./NavbarLinks"
import Logo from "./logo"

const Navigation = styled.nav`
  font-family: "Ubuntu Condensed";
  background-color: #021132;
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 70px;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;

  @media (max-width: 768px) {
    position: sticky;
    height: 8vh;
    height: 70px;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`
const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 2vw;

  @media (max-width: 768px) {
    display: flex;
  }
`
const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 5vh;
    padding-bottom: 5vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
    height: auto;
    background: #021132;
  }
`
const Hamburger = styled.div`
  background-color: #fff;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #fff;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }
  ::before {
    transform: ${props =>
    props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }
  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)
  const toggleNavbar = () => { setNavbarOpen(!navbarOpen) }

  return (
    <Navigation className="navigation" >

      <Logo />
      <Toggle
        navbarOpen={navbarOpen}
        onClick={toggleNavbar}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>

      {navbarOpen ? (
        <Navbox>
          <NavbarLinks toggleNavbar={toggleNavbar} />
        </Navbox>
      ) : (
          <Navbox open className="desktopMenu">
            <NavbarLinks />
          </Navbox>
        )}

    </Navigation>
  )
}

export default Navbar
