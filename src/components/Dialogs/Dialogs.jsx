import React from 'react';
import PropTypes from 'prop-types';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";
import {Redirect} from "react-router";

const Dialogs = (props) => {
  const {addMessage, newMessageChange, dialogsPage} = props;
  const {dialogs, messages, newMessageText} = dialogsPage;
  const newMsgElement = React.createRef();

  const onAddMessage = () => {
    addMessage();
  };

  const onMessageChange = () => {
    const text = newMsgElement.current.value;
    newMessageChange(text);
  };
  if(!props.isAuth) return <Redirect to='/login' />;

  return (
    <div className={s.dialogsBlock}>
      <div className={s.dialogsItems}>
        {dialogs.map(item =>
          <DialogItem
            key={item.id}
            name={item.name}
            id={item.id}
          />
        )}
      </div>
      <div className={s.messages}>
        {messages.map(item =>
          <Message
            message={item.message}
            key={item.id}
          />
        )}
        <div className="addMessage">
          <div>
            <textarea
              ref={newMsgElement}
              value={newMessageText}
              onChange={onMessageChange}
            />
          </div>
          <div>
            <button onClick={onAddMessage}>Add message</button>
          </div>
        </div>
      </div>
    </div>
  )
};


Dialogs.propTypes = {
  dialogsPage: PropTypes.object
};

export default Dialogs;

