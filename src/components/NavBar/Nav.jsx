import classes from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const active = ({ isActive }) => (isActive ? classes.active : classes.items);
const activeLast = ({ isActive }) =>
  isActive ? classes.itemsLastActive : classes.itemsLast;

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <NavLink className={active} to="/profile">
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink className={active} to="/dialogs">
          Message
        </NavLink>
      </div>
      {/* <div>
        <NavLink className={active} to="/news">
          News
        </NavLink>
      </div>
      <div>
        <NavLink className={active} to="/music">
          Music
        </NavLink>
      </div> */}
      <div>
        <NavLink className={active} to="/friends">
          Find Frinends
        </NavLink>
      </div>

      <div>
        <NavLink className={activeLast} to="/settings">
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
