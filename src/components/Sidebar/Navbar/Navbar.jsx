import React from 'react';
import s from './Navbar.module.css';
import NavbarItem from "./NavbarItem/NavbarItem";

const Navbar = (props) => {
  const {links} = props;
  // debugger;
  return (
    <nav className={s.nav}>
      {links.map(link =>
        <NavbarItem key={link.id} {...link}/>
      )}
    </nav>

  )
};

export default Navbar;
