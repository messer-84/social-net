import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";

let AddNewPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={"textarea"}
          name={"newPostText"}
          placeholder={"Enter your post"}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

AddNewPostForm = reduxForm({
  form: "ProfileAddNewPostForm"
})(AddNewPostForm);

const MyPosts = props => {
  const { posts } = props;

  const addNewPost = values => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.myPostsBlock}>
      <h2>My posts</h2>
      <AddNewPostForm onSubmit={addNewPost} />
      <div className={s.posts}>
        {posts.map(item => {
          return (
            <Post
              key={item.id}
              message={item.message}
              likesCount={item.likesCount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyPosts;
