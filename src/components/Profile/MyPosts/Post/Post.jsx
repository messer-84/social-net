import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <div className={s.avatarWrap}>
        <img
          src='http://i.pravatar.cc/50'/>
      </div>
      <div className={s.postInfo}>
        <div className={s.postText}>
          {props.message}
        </div>
        <div>
          <span>{props.likesCount} like</span>
        </div>
      </div>

    </div>
  )
};

export default Post;
