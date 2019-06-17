import {createStore, combineReducers} from 'redux';
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import dialogsReducer from "./dialogsReducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer
});

const store = createStore(reducers);

window.store = store;

export default store;
