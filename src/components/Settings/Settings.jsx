import classes from "./Settings.module.css";
import { withAuthComponent } from "../../hoc/AuthRedirect";
import { connect } from "react-redux";
import { compose } from "redux";

const Settings = () => {
  return <div className={classes.setting}>Settings</div>;
};

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
// withAuthComponent

export let SettingContainer = compose(
  connect(mapStateToProps, {}),
  withAuthComponent
)(Settings);
