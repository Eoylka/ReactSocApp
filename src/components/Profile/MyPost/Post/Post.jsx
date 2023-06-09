import classes from "./Post.module.css";
import { useRef, memo } from "react";

const Post = (props) => {
  const count = useRef(0);
  console.log(count.current++, "post");
  return (
    <div>
      <div className={classes.post_1}>
        <div className={classes.user_logo}></div>
        <div className={classes.user_post}>{props.message}</div>
      </div>
      <button className={classes.like}>Like: {props.like}</button>
      <button className={classes.dislike}>Dislike: {props.dislike}</button>
    </div>
  );
};

export default Post;
