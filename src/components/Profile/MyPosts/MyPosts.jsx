import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  const {postData, newPostText,  store} = props;
  let newPostElement = React.createRef();

  const handleAddPost = () => {
    store.addPost.call(store);
  };
  const onPostChange = () => {
    const text = newPostElement.current.value;
    store.updateNewPostText.call(store,text);
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
          <button onClick={handleAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postData.map(item => {
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
