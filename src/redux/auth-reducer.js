import { stopSubmit } from "redux-form";
import { authAPI, myProfile } from "../api/api";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "setUsersData": {
      return {
        ...state,
        ...action.data,
      };
    }
    default:
      return state;
  }
};

export const setUsersData = (userId, email, login, isAuth) => {
  return { type: "setUsersData", data: { userId, email, login, isAuth } };
};

export const myProfileThunkCreator = () => async (dispatch) => {
  let response = await myProfile();

  if (response.resultCode === 0) {
    let { id, login, email } = response.data;

    dispatch(setUsersData(id, email, login, true));
  }
};
export const ProfileLogOut = () => async (dispatch) => {
  let response = await myProfile();

  if (response.resultCode === 1) {
    dispatch(setUsersData(null, null, null, false));
  }
};

export const loginThunkCreator =
  (email, passwor, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, passwor, rememberMe);

    if (response.data.resultCode === 0) {
      dispatch(myProfileThunkCreator());
    } else {
      dispatch(stopSubmit("login", { _error: response.data.messages }));
    }
  };

export const logOutThunkCreator = () => async (dispatch) => {
  let response = await authAPI.logOut();

  if (response.data.resultCode === 0) {
    dispatch(ProfileLogOut());
  }
};

export default authReducer;
