import React from "react";
import {NavLink} from 'react-router-dom';
import styles from "./users.module.css";
import userPhoto from "../../assets/img/user.png";
import * as axios from "axios";
import {followAPI} from '../../api/api';

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
                  <button onClick={() => {
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                      withCredentials: true,
                      headers: {
                        "API_KEY": "fae392d4-f439-45a4-831e-31b83d1df367"
                      }
                    })
                      .then(response => {
                        if (response.data.resultCode === 0) {
                          unfollow(user.id);
                        }
                      });
                  }}>Unfollow</button>
                    : <button onClick={() => {

                      axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                        withCredentials: true,
                        headers: {
                               "API_KEY": "fae392d4-f439-45a4-831e-31b83d1df367"
                             }
                      })
                        .then(response => {
                          if (response.data.resultCode === 0) {
                            follow(user.id)
                          }
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
