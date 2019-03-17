import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = props => {
  const {posts, newPostText} = props.profilePage;
  const { store} = props;
  return (
    <div className={s.content}>
      <ProfileInfo/>
      <MyPosts
        store={store}
        postData={posts}
        newPostText={newPostText}
      />
    </div>
  )
};

export default Profile;
