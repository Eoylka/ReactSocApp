import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logOutThunkCreator } from "../../redux/auth-reducer";
import { compose } from "redux";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  profile: state.profileReducer.profile,
});

export default compose(
  connect(mapStateToProps, {
    logOutThunkCreator,
  })(HeaderContainer)
);
