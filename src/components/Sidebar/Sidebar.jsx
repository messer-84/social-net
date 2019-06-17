import React from 'react';
import s from './Sidebar.module.css';
import Navbar from "./Navbar/Navbar";
import Friends from "./Friends/Friends";
import store from '../../redux/redux-store';


const Sidebar = (props) => {

        const {links, friends} = store.getState().sidebar;

        return (
          <div className={s.sidebar}>
            <Navbar links={links}/>
            <Friends friends={friends}/>
          </div>
        )

};

export default Sidebar;
