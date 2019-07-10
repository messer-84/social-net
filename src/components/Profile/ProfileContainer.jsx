import React from 'react';
import s from './Profile.module.css';
import Profile from './Profile'
import * as axios from "axios";
import {connect} from "react-redux";
import {
  setUserProfileAC
} from "../../redux/profileReducer";


class ProfileContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
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
  setUserProfile: setUserProfileAC,
};


export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
