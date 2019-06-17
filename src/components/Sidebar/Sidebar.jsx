import React from 'react';
import s from './Sidebar.module.css';
import Navbar from "./Navbar/Navbar";
import Friends from "./Friends/Friends";
import StoreContext from '../../StoreContext';


const Sidebar = (props) => {
  return (
    <StoreContext.Consumer>{
      store => {
        const {links, friends} = store.getState().sidebar;

        return (
          <div className={s.sidebar}>
            <Navbar links={links}/>
            <Friends friends={friends}/>
          </div>
        )
      }

    }</StoreContext.Consumer>
  )
};

export default Sidebar;
