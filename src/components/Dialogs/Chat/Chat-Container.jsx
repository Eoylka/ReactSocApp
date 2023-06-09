import { addMsgActionCreator, clearMsg } from "../../../redux/mesages-reducer";
import Chat from "./Chat";
import { connect } from "react-redux";
import { withAuthComponent } from "../../../hoc/AuthRedirect";
import { compose } from "redux";

const ChactContainer = (props) => {
  return <Chat {...props} />;
};

let mapStateToProps = (state) => ({
  message: state.mesagesReducer,
});

let ProfileContainer = compose(
  connect(mapStateToProps, { addMsgActionCreator, clearMsg }),
  withAuthComponent
)(ChactContainer);

export default ProfileContainer;
