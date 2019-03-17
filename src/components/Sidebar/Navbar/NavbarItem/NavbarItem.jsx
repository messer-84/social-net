import React from 'react';
import s from '../Navbar.module.css';
import {NavLink} from "react-router-dom";

const NavbarItem = (props) => {
  const {title, url} = props;
  return (
    <div className={s.item}>
      <NavLink
        to={`/${url}`}
        activeClassName={s.active}>
        {title}
      </NavLink>
    </div>
  )

};

export default NavbarItem;
