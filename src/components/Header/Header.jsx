import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <a className={s.logo} href="#">Logo</a>
    </header>
  )
};

export default Header;
