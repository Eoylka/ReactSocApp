import classes from "./Login.module.css";
import LoginFormRedux from "./LoginForm";
import { connect } from "react-redux";
import {
  loginThunkCreator,
  logOutThunkCreator,
} from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";

const Login = ({ loginThunkCreator, isAuth }) => {
  const onSubmit = (formData) => {
    loginThunkCreator(
      formData.username,
      formData.password,
      formData.rememberMe
    );
  };
  if (isAuth) {
    return <Navigate to="/profile" />;
  }
  return (
    <div>
      <div className={classes.signUp}> Sign Up:</div>
      <LoginFormRedux onSubmit={onSubmit} />
      <div className={classes.loginUp}>Want to check it? Try this:</div>
      <div className={classes.block}></div>
      <div className={classes.loginUp1}>Login: artemdvd@mail.ru</div>
      <div className={classes.loginUp1}>Password: artdvd</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
  loginThunkCreator,
  logOutThunkCreator,
})(Login);
