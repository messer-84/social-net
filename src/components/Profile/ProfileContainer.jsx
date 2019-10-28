import React from 'react';
import s from './Profile.module.css';
import Profile from './Profile'
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
// import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {Redirect, withRouter} from 'react-router-dom';
import {compose} from "redux";


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    console.log('props', this.props);
    if(!userId){
      userId = 5;
    }
    this.props.getUserProfile(userId);

  }

  render() {
    if(!this.props.isAuth) return <Redirect to='/login' />;
    return (
      <div className={s.content}>
        <Profile  {...this.props} profile={this.props.profile}/>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default compose(
  connect(mapStateToProps, {getUserProfile}),
  withRouter
)(ProfileContainer);
