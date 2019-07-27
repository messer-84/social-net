import React from 'react';
import s from '../Friends.module.css';

const Friends = (props) => {
  return (
    <div className={s.friendsItem}>
      <div className={s.avatarWrap}>
        <img src='http://i.pravatar.cc/50' alt="avatar"/>
      </div>
      <div className="name">{props.friend.name}</div>
    </div>
  )

};

export default Friends;
