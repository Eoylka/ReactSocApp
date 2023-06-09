import { getProfile } from "../api/api";
import { profileAPI } from "../api/api";
import photo1 from "../img/usersLogo/Ellipse 42 (1).png";
import photo2 from "../img/usersLogo/Ellipse 42 (2).png";
import photo3 from "../img/usersLogo/Ellipse 42 (3).png";
import photo4 from "../img/usersLogo/Ellipse 42.png";
import { reset } from "redux-form";

let initialState = {
  UserInfo: [
    {
      key: "1",
      name: "Viktoria Popova",
      msg: "Hi",
      photo: photo1,
    },
    {
      key: "2",
      name: "Dima Popov",
      msg: "Hello",
      photo: photo2,
    },
    {
      key: "3",
      name: "Vika Ivanova",
      msg: "how do you ",
      photo: photo3,
    },
    {
      key: "4",
      name: "Artem Gusev",
      msg: "Re",
      photo: photo4,
      status: "active",
    },
    {
      key: "5",
      name: "Kati Ivanova",
      msg: "What's new with",
      photo: "",
    },
  ],
  UserPost: [
    {
      key: "2",
      post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nisl suscipit adipiscing. ",
      like: "2",
      dislike: "1",
    },
    {
      key: "3",
      post: "Volutpat odio facilisis mauris sit amet. Vulputate sapien nec sagittis aliquam malesuada. Nec sagittis aliquam malesuada bibendum. Auctor elit sed vulputate mi. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. ",
      like: "0",
      dislike: "1",
    },
    { key: "4", post: "I created it by map", like: "0", dislike: "1" },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addPost": {
      let newPost = {
        key: state.UserPost.length + 1,
        post: action.post,
        like: 0,
        dislike: 0,
      };

      return {
        ...state,
        UserPost: [...state.UserPost, newPost],
      };
    }

    case "setUserProfile": {
      return { ...state, profile: action.profile };
    }
    case "setStatus": {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};

export const addPost = (post) => {
  return {
    type: "addPost",
    post: post,
  };
};

export const clearPost = () => (dispatch) => {
  dispatch(reset("addPost"));
};

export const setUserProfile = (profile) => {
  return { type: "setUserProfile", profile: profile };
};
export const setStatus = (status) => {
  return { type: "setStatus", status: status };
};

export const profileThunkCreator = (userID) => async (dispatch) => {
  let response = await getProfile(userID);
  dispatch(setUserProfile(response));
};

export const getStatusThunkCreator = (status) => async (dispatch) => {
  let response = await profileAPI.getStatus(status);
  dispatch(setStatus(response.data));
};

export const updateStatusThunkCreator = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) dispatch(setStatus(status));
};

export default profileReducer;
