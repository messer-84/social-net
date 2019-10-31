import React, { Component } from "react";
import s from "./App.module.css";
import { Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./components/commons/Preloader/Preloader";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className={s.appWrapper}>
        <HeaderContainer />
        <div className={s.main}>
          <Sidebar />
          <div className={s.appWrapperContent}>
            <Route path="/profile/:userId?" component={ProfileContainer} />
            <Route path="/messages" component={DialogsContainer} />
            <Route path="/users" components={UsersContainer} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
            <Route path="/users" component={UsersContainer} />
            <Route path="/login" component={LoginPage} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // debugger
  return {
    initialized: state.app.initialized
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
