import React from 'react';
import s from './Profile.module.css';
import Profile from './Profile'
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";


class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setUserProfile()
  }

  render() {
    return (
      <div className={s.content}>
        <Profile  {...this.props} profile={this.props.profile}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

const mapDispatchToProps = {
  setUserProfile,
};


export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
