import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  const {state: {sidebar}, store} = props;

  return (
    <div className='app-wrapper'>
      <Header/>
      <div className="main">
        <Sidebar state={sidebar}/>
        <div className="app-wrapper-content">
          <Route path="/profile" render={() => (
            <Profile store={store}/>
          )}
          />
          <Route path="/messages" render={() => (
            <DialogsContainer store={store}/>
          )}
          />
          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>
        </div>
      </div>
      <Footer/>
    </div>

  );
};

export default App;
