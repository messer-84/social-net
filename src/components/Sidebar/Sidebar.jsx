import React from 'react';
import s from './Sidebar.module.css';
import Navbar from "./Navbar/Navbar";
import Friends from "./Friends/Friends";

const Sidebar = (props) => {
  const {links, friends} = props.state;
  return (
    <div className={s.sidebar}>
      <Navbar links={links}/>
      <Friends friends={friends}/>
    </div>
  )
};

export default Sidebar;
