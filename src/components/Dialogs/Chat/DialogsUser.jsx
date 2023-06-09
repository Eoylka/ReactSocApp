import { connect } from "react-redux";
import s from "../Dialogs.module.css";
import User from "../Users/Users";

const DialogsUser = (props) => {
  let DiealogsELements = props.profile.map((el) => (
    <User
      key={el.key}
      user={el.name}
      msg={el.msg}
      photo={el.photo}
      status={el.status}
    />
  ));

  return (
    <div className={s.content}>
      <div>
        <div className={s.mesages}>Mesages</div>
        {DiealogsELements}
      </div>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    profile: state.profileReducer.UserInfo,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {};
};

const DialogsUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogsUser);

export default DialogsUserContainer;
