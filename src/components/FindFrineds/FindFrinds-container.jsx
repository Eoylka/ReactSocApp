import { connect } from "react-redux";
import {
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  getUsersThunkCreator,
  unfollowThunkCreator,
  followThunkCreator,
} from "../../redux/users-reducer";
import React from "react";
import Users from "./UsersComponent";
import { PreLoader } from "../Common/preLoadre";
import { withAuthComponent } from "../../hoc/AuthRedirect";
import { compose } from "redux";
import {
  currentPage,
  getUserSuperSelector,
  getpageSize,
  hideBTN,
  isFetching,
  totalUsersCount,
} from "../../redux/users-selectors";
import s from "./FindFrindes.module.css"; //прописать стили 

class UsersContainer extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.getUsersThunkCreator(currentPage, pageSize);
  }

  onPageChanged = (pageNum) => {
    const { pageSize } = this.props;
    this.props.setCurrentPage(pageNum);
    this.props.getUsersThunkCreator(pageNum, pageSize);
  };

  render() {
    return (
      <div>
        <div className={s.users}>Users</div>
        <div>
          {this.props.isFetching ? (
            <PreLoader />
          ) : (
            <Users
              totalUsersCount={this.props.totalUsersCount}
              pageSize={this.props.pageSize}
              currentPage={this.props.currentPage}
              onPageChanged={this.onPageChanged}
              users={this.props.users}
              hideBTN={this.props.hideBTN}
              follow={this.props.followThunkCreator}
              unfollow={this.props.unfollowThunkCreator}
            />
          )}
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUserSuperSelector(state),
    pageSize: getpageSize(state),
    totalUsersCount: totalUsersCount(state),
    currentPage: currentPage(state),
    isFetching: isFetching(state),
    hideBTN: hideBTN(state),
  };
};

let AC = {
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  getUsersThunkCreator,
  followThunkCreator,
  unfollowThunkCreator,
};

let FindFriendsContainer = compose(
  connect(mapStateToProps, AC),
  withAuthComponent
)(UsersContainer);

export default FindFriendsContainer;
