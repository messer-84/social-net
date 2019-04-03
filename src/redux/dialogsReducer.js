const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const initialState = {
  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-kamasutra'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'yo'},
  ],
  dialogs: [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'},
  ],
  newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessageText || '';
      return state;
    case ADD_MESSAGE:
      const {messages, newMessageText} = state;

      let newMessage = {
        id: messages.length + 1,
        message: newMessageText,
      };
      state.newMessageText = '';
      state.messages.push(newMessage);
      return state;
    default:
      return state;
  }

};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessageText: text
});

export default dialogsReducer;
