import React from "react";
import {NavLink} from 'react-router-dom';
import styles from "./users.module.css";
import userPhoto from "../../assets/img/user.png";

const Users = (props) => {
  const {unfollow, follow, totalUsersCount, pageSize} = props;

  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div>
        {pages.map(p => {
          return (
            <span key={p}
              className={props.currentPage === p ? styles.selectedPage : ""}
              onClick={() => props.onPageChanged(p)}
            >{p}</span>)
        })}
      </div>
      {props.users.map(user => {
          const textBtn = user.followed ? "Unfollow" : "Follow";
          const followFunc = user.followed ? unfollow : follow;
          return (
            <div key={user.id}>
              <div>
                <div>
                  <NavLink to={'/profile/' + user.id}>
                  <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt=""
                       className={styles.userPhoto}/>
                  </NavLink>
                </div>
                <div>
                  <button onClick={() => followFunc(user.id)}>{textBtn}</button>
                </div>
              </div>
              <div>
                <div>
                  <div>{user.name}</div>
                  <div>{user.status}</div>
                </div>
                <div>
                  <div>{"user.location.city"}</div>
                  <div>{"user.location.country"}</div>
                </div>
              </div>
            </div>
          );
        })
      }</div>
  )
};

export default Users;
