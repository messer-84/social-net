import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from './redux/store';

const rerenderEntireTree = (store) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        store={store}
      />
    </BrowserRouter>, document.getElementById('root'));
};

rerenderEntireTree(store);

store.subscribe(rerenderEntireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
