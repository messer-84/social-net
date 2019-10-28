import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../commons/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if(props){
        console.log('prof inf props', props);
    }
  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div className={s.profileInfo}>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt=""/>
          <div>{props.profile.fullName}</div>

          <ProfileStatus status={'status ' + props.profile.userId} />
      </div>
    </div>
  )
};

export default ProfileInfo;
