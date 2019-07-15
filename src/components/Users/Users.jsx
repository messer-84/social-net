import React from "react";
import {NavLink} from 'react-router-dom';
import styles from "./users.module.css";
import userPhoto from "../../assets/img/user.png";
import {usersAPI} from '../../api/api';

const Users = (props) => {
  const {totalUsersCount, pageSize} = props;

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
                {user.followed ?
                  <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                    props.toggleFollowingProgress(true, user.id);
                    usersAPI.unfollow(user.id)
                      .then(response => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(user.id);
                        }
                        props.toggleFollowingProgress(false, user.id);

                      });
                  }}>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                    props.toggleFollowingProgress(true, user.id);

                      usersAPI.follow(user.id)
                        .then(response => {
                          if (response.data.resultCode === 0) {
                            props.follow(user.id)
                          }
                          props.toggleFollowingProgress(false, user.id);
                        });


                  }}>Follow</button>
                }
              </div>
            </div>
            <div>
              <div>
                <div>user-id: {user.id}</div>
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
      }
    </div>
  )
};

export default Users;
