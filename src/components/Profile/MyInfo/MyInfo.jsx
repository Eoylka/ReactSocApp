import { PreLoader } from "../../Common/preLoadre";
import classes from "../Profile.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../img/UserLogo.png";
import userProfPhto from "../../../img/UserProf.png";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <PreLoader />;
  }

  return (
    <div>
      <div>
        <img
          className={classes.userProfPhoto}
          src={
            props.profile.photos.status
              ? props.profile.photos.status
              : userProfPhto
          }
          alt=""
        />
      </div>
      <div className={classes.contentnInfo}>
        <div className={classes.userImg}>
          <img
            className={classes.userImgLogo}
            src={props.profile.photos.large || userPhoto}
            alt="user img"
          />
        </div>
        <div className={classes.userInfo}>
          <h1>{props.profile.fullName}</h1>
          <h2>About me: {props.profile.aboutMe}</h2>
          <h2>City: Minsk</h2>
          <h2>Web Site: {props.profile.contacts.vk}</h2>

          <ProfileStatusWithHooks
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
