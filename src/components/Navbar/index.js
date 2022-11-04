import React from 'react';
import { Nav, NavLogo, Bars, NavLink, NavMenu } from "./NavbarElements";

export const NavBar = () => {
  return (
    <>
        <Nav>
          <NavLogo exact to="/">
              ASHLING
            </NavLogo>
            <Bars />
          <NavMenu>
            <NavLink to="/about" activeStyle>
              About
            </NavLink>
            <NavLink to="/ourteam" activeStyle>
              Our Team
            </NavLink>
            <NavLink to="/student" activeStyle>
              Student Partnership
            </NavLink>
            <NavLink to="/contact" activeStyle>
              Contact
            </NavLink>
          </NavMenu>
        </Nav>
    </>
  );
};

export default NavBar;
