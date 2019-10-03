import React from 'react';
import {Redirect} from 'react-router-dom';
import connect from "react-redux/es/connect/connect";



const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      console.log(this.props.isAuth);

      if (!this.props.isAuth) return <Redirect to='/login'/>;
      return <Component {...this.props} />
    }
  }



  const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectedAuthRedirectComponent;
};
