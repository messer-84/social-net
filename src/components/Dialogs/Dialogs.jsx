import React from 'react';
import PropTypes from 'prop-types';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from '../../redux/dialogsReducer'


const Dialogs = (props) => {
  const {store, store: {dispatch}} = props;
  const {dialogs, messages, newMessageText} = store.getState().dialogsReducer;


  const newMsgElement = React.createRef();

  const handleAddMessage = () => {
    dispatch.call(store, addMessageActionCreator());
  };

  const onMessageChange = () => {
    const text = newMsgElement.current.value;
    dispatch.call(store, updateNewMessageTextActionCreator(text));
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


Dialogs.propTypes = {
  dialogsPage: PropTypes.object
};

export default Dialogs;

