import React from 'react';
import s from './Friends.module.css';
import FriendsItem from "./FriendsItem/FriendsItem";

const Friends = (props) => {
  const {friends} = props;
  return (
    <div className={s.friendsBlock}>
      <h2>Friends</h2>
      <div className={s.friendsList}>
        {friends.map(friend => {
          if (friend.status === 'online') {
            return (
              <FriendsItem
                key={friend.id}
                friend={friend}
              />
            )
          }
          return null;
        })}
      </div>
    </div>
  )

};

export default Friends;
