import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  //NavBtn,
  //NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        
        <NavLink to='/'>
          <img src={require('../../images/computx.jpeg')} alt='logo' width="250" height="250" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activestyle>
            About
          </NavLink>
          {/* <li> Projects 
					  <ul>
						  <li><NavLink to={`/Ongoing`}> Ongoing </NavLink> </li>
						  <li><NavLink to={`/Potential`}> Potential </NavLink> </li>
					  </ul>
				  </li> */}
          <NavLink to='/services' activestyle>
            Projects
          </NavLink> 
          <NavLink to='/contact-us' activestyle>
            Contact Us
          </NavLink>
          <NavLink to='/sign-up' activestyle>
            People
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
  
      </Nav>
    </>
  );
};

export default Navbar;
