import {createStore, combineReducers} from 'redux';
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import dialogsReducer from "./dialogsReducer";

const reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  sidebarReducer
});

const store = createStore(reducers);

export default store;
