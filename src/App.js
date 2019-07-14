import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer/>
      <div className="main">
        <Sidebar/>
        <div className="app-wrapper-content">
          <Route path="/profile" component={ProfileContainer}/>
          <Route path="/messages" component={DialogsContainer}/>
          <Route path="/users" components={UsersContainer}/>
          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>
          <Route path="/users" component={UsersContainer}/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
