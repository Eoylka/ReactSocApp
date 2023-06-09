import s from "./Users.module.css";
import without from "../../../img/usersLogo/WithoutPhoto.png";

const User = (props) => {
  const name = props.status === "active" ? s.user_name1 : s.user_name;
  const msg = props.status === "active" ? s.user_name1 : s.user_name;

  return (
    <div className={s.user_field}>
      <div>
        <img src={props.photo ? props.photo : without} alt="" />
      </div>
      <div className={s.user_block}>
        <a className={name}>{props.user}</a>
        <div className={s.block}></div>
        <a className={msg}>{props.msg}</a>
      </div>
    </div>
  );
};

export default User;
