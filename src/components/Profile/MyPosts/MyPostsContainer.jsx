import React from 'react';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from '../../../redux/profileReducer'
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  const {posts, newPostText, store} = props;

  const addPost = () => {
    store.dispatch(addPostActionCreator());
  };

  const onPostChange = (text) => {
    const action = updateNewPostTextActionCreator(text);
    store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={posts}
      newPostText={newPostText}
    />
  )

};

export default MyPostsContainer;
