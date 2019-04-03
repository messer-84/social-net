import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = props => {
  const {store, store:{dispatch}} = props;
  const {posts, newPostText} = store.getState().profileReducer;

  return (
    <div className={s.content}>
      <ProfileInfo/>
      <MyPostsContainer
        store={store}
        dispatch={dispatch.bind(store)}
        posts={posts}
        newPostText={newPostText}
      />
    </div>
  )
};

export default Profile;
