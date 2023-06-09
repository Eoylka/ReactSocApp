import "./Header.css";
import { NavLink } from "react-router-dom";
import userPhoto from "../../img/UserLogo.png";
import UserWindow from "./UserWIndow";
import { useState } from "react";

const Header = (props) => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <header className="header">
      <div className="headerImg">
        <div className="loginBlock">
          {props.isAuth ? (
            <div>
              <div className="flex">
                <NavLink to={"/profile"}>
                  <img className="userImgLogo" src={userPhoto} alt="" />
                </NavLink>
                <p
                  className="userName"
                  onClick={() => {
                    setModalActive(true);
                  }}
                >
                  {props.login}
                </p>
              </div>
              <UserWindow
                {...props}
                active={modalActive}
                setActive={setModalActive}
              />
            </div>
          ) : (
            <NavLink className="userName" to={"/login"}>
              Login
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
