import { NavLink } from "react-router-dom";
import s from "./FindFrindes.module.css";
import defUserImg from "../../img/usersLogo/defoult.png";

let User = ({ user, follow, unfollow, hideBTN }) => {
  return (
    <div key={user.id} className={s.grid}>
      <div>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              className={user.followed ? s.userImgFol : s.userImgUnfol}
              src={user.photos.small ? user.photos.small : defUserImg}
              alt=""
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              className={s.btnFollow}
              disabled={hideBTN.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Follow
            </button>
          ) : (
            <button
              className={s.btnUnFollow}
              disabled={hideBTN.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Unfollow
            </button>
          )}
        </div>
      </div>
      <div className={s.nameBlock}>
        <div className={s.user_name}>{user.name}</div>
        <div className={s.user_post}>{user.status}</div>
      </div>
      <div className={s.geoBlock}>
        <div className={s.user_font3}>{"u.location.city"}</div>
        <div className={s.user_font3}>{"u.location.country"}</div>
      </div>
    </div>
  );
};

export default User;
