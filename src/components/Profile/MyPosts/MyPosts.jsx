import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  // debugger;
  const {updateNewPostText, addPost, posts, newPostText} = props;
  let newPostElement = React.createRef();
  const onAddPost = () => {
    addPost();
  };
  const onPostChange = () => {
    const text = newPostElement.current.value;
    updateNewPostText(text);
  };


  return (
    <div className={s.myPostsBlock}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            value={newPostText}
            onChange={onPostChange}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
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
  )

};

export default MyPosts;
