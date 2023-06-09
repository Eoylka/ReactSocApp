import React from "react";
import classes from "../Profile.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  diactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status)
      this.setState({ status: this.props.status });
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <h2
              onDoubleClick={this.activateEditMode}
              className={classes.userInfo}
            >
              Status: {this.props.status || "--------"}
            </h2>
            {/* <button>Change status</button> */}
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.diactivateEditMode}
              className={classes.userInfo}
              value={this.state.status}
            />
            {/* <button>Change status</button> */}
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
