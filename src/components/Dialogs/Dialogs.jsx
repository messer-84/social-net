import React from 'react';

import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";


const Dialogs = (props) => {
  const { store } = props;
  const {dialogs, messages, newMessageText} = props.dialogsPage;

  const newMsgElement = React.createRef();

  const handleAddMessage = () => {
    store.addMessage.call(store);
  };

  const onMessageChange = () => {
    const text = newMsgElement.current.value;
    store.updateNewMessageText.call(store, text);
  };

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
            <button onClick={handleAddMessage}>Add message</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Dialogs;
