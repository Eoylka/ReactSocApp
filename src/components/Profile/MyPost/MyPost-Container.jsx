import { addPost, clearPost } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    store: state.profileReducer,
  };
};

const MyPostsContainer = connect(mapStateToProps, { addPost, clearPost })(
  MyPosts
);

export default MyPostsContainer;
