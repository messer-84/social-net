import React from 'react';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from '../../../redux/profileReducer'
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  const {store} = props;
  const state = store.getState().profilePage;

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
      posts={state.posts}
      newPostText={state.newPostText}
    />
  )

};

export default MyPostsContainer;
