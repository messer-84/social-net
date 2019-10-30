const SEND_MESSAGE = "SEND_MESSAGE";

const initialState = {
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your it-kamasutra" },
    { id: 3, message: "Yo" },
    { id: 4, message: "yo" }
  ],
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera" }
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;

      return {
        ...state,
        newMessageBody: "",
        messages: [
          ...state.messages,
          { id: state.messages.length + 1, message: body }
        ]
      };
    default:
      return state;
  }
};

export const sendMessageActionCreator = newMessageBody => ({
  type: SEND_MESSAGE,
  newMessageBody
});


export default dialogsReducer;
