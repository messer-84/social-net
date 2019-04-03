import React from 'react';
import PropTypes from 'prop-types';
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from '../../redux/dialogsReducer'
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
  const {store, store: {dispatch}} = props;
  const state = store.getState().dialogsPage;


  const addMessage = () => {
    dispatch.call(store, addMessageActionCreator());
  };

  const newMessageChange = (text) => {
    dispatch.call(store, updateNewMessageTextActionCreator(text));
  };

  return (
    <Dialogs
      state={state}
      newMessageChange={newMessageChange}
      addMessage={addMessage}
    />
  )
};


Dialogs.propTypes = {
  dialogsPage: PropTypes.object
};

export default DialogsContainer;

