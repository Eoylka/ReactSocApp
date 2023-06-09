import Posts from "./Post/Post";
import styles from "./Post/Post.module.css";
import classes from "../Profile.module.css";
import React, { memo, useMemo } from "react";
import { Field, reduxForm } from "redux-form";
import { requiredField } from "../../../utils/validators/validators";
import { TextArea } from "../../Common/formsControl";

const MyPosts = (props) => {
  let mapPost = useMemo(
    () =>
      props.store.UserPost.map((el) => (
        <Posts
          message={el.post}
          like={el.like}
          dislike={el.dislike}
          key={el.key + 1}
        />
      )),
    [props.store.UserPost]
  );

  let onAddPost = (post) => {
    props.addPost(post.newPostBody);
    props.clearPost();
  };

  return (
    <div className={styles.post_block}>
      <div className={classes.myPosts}>My posts</div>
      <AddPostFormRedux onSubmit={onAddPost} />
      {mapPost}
    </div>
  );
};

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        className={classes.inputePost}
        component={TextArea}
        name="newPostBody"
        placeholder="Enter your post"
        validate={[requiredField]}
      />
      <button className={classes.btnInp}>SEND</button>
    </form>
  );
};

const AddPostFormRedux = reduxForm({
  form: "addPost",
})(AddPostForm);

// export default memo(MyPosts, (prev, next) => {
//   return prev.addPost !== next.addPost || prev.clearPost !== next.clearPost;
// });

export default MyPosts;
