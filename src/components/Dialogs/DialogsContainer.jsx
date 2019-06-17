import React from 'react';
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from '../../redux/dialogsReducer'
import Dialogs from "./Dialogs";
import StoreContext from '../../StoreContext';


const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>{
      store => {
        const state = store.getState().dialogsPage;
        const {dispatch} = store;

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
        );

      }
    }</StoreContext.Consumer>
  );

};


export default DialogsContainer;

