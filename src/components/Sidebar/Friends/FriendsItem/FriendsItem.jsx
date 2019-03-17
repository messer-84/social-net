import React from 'react';
import s from '../Friends.module.css';

const Friends = (props) => {
  const {friend} = props;
  return (
    <div className={s.friendsItem}>
      <div className={s.avatarWrap}>
        <img
          src='http://i.pravatar.cc/50'/>
      </div>
        <div className="name">{friend.name}</div>
    </div>
  )

};

export default Friends;
