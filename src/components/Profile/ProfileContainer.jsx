import MyPostsContainer from "./MyPost/MyPost-Container";
import ProfileInfo from "./MyInfo/MyInfo";
import React from "react";
import { connect } from "react-redux";
import {
  setUserProfile,
  profileThunkCreator,
  getStatusThunkCreator,
  updateStatusThunkCreator,
} from "../../redux/profile-reducer";
import { compose } from "redux";
import { withRouter1 } from "../../hoc/AuthRedirect";
import { useEffect } from "react";

// class ProfileConteiner2 extends React.Component {
//   componentDidMount() {
//     let userId = this.props.router.params.userId;

//     if (!userId) {
//       userId = this.props.athUserId;
//     }
//     if (!userId) {
//       this.props.router.navigate("/login");
//     }
//     this.props.profileThunkCreator(userId);
//     this.props.getStatusThunkCreator(userId);
//   }

//   render() {
//     return (
//       <div>
//         <ProfileInfo
//           profile={this.props.profile}
//           status={this.props.status}
//           updateStatus={this.props.updateStatusThunkCreator}
//         />
//         <MyPostsContainer />
//       </div>
//     );
//   }
// }

const ProfileConteiner2 = (props) => {
  const { athUserId } = props;
  debugger;
  useEffect(() => {
    let userId = props.router.params.userId;

    if (!userId) {
      userId = props.athUserId;
    }
    if (!userId) {
      props.router.navigate("/login");
    }
    props.profileThunkCreator(userId);
    props.getStatusThunkCreator(userId);
  }, []);

  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatusThunkCreator}
      />
      <MyPostsContainer />
    </div>
  );
};

let mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
  status: state.profileReducer.status,
  athUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

let ProfileContainer = compose(
  connect(mapStateToProps, {
    setUserProfile,
    profileThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator,
  })
  // withAuthComponent
)(withRouter1(ProfileConteiner2));

export default ProfileContainer;
