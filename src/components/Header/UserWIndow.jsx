import "./Header.css";
import userPhoto from "../../img/UserLogo.png";
import settings from "../../img/add/Vector.svg";
import goOut from "../../img/add/bx_log-out.svg";
import { NavLink } from "react-router-dom";

const UserWindow = (props) => {
  return (
    <div className={props.active ? "active" : "none"}>
      <div className="userWindow" onClick={() => props.setActive(false)}>
        <div>
          <img className="imgInside" src={userPhoto} alt="" />
        </div>
        <div className="nameInside">{props.login}</div>

        <div className="setInside">
          <div>
            <img className="setLogo" src={settings} alt="" />
          </div>
          <NavLink className="settings" to={"/settings"}>
            Settinngs
          </NavLink>
        </div>

        <div className="setInside">
          <div>
            <img className="goOutLogo" src={goOut} alt="" />
          </div>
          <button className="btnOut" onClick={props.logOutThunkCreator}>
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserWindow;
