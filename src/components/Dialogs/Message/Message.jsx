import React from 'react';
import s from './Message.module.css';



const Message = (props) => {
  return (
    <div className={s.messageBlock}>
      <div className={s.authorPhoto}>
        <img src='http://i.pravatar.cc/50'/>
      </div>
      <div className={s.details}>
        <div className={s.detailsRow}>
          <div className="name">Sasha</div>
          <div className="time">15:45</div>
        </div>
        <div className={s.message}>{props.message}</div>

      </div>

    </div>
  );
};


export default Message;
