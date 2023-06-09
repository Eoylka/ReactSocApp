import { follow, getUsers, unFollow } from "../api/api";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 20,
  currentPage: 1,
  isFetching: true,
  hideBTN: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "follow": {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }

    case "unfollow": {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case "setUsers": {
      return { ...state, users: action.users };
    }

    case "setPage": {
      return { ...state, currentPage: action.currentPage };
    }
    case "setTotalUsersCount": {
      return { ...state, totalUsersCount: action.totalUsersCount };
    }

    case "toggleIsFetching": {
      return { ...state, isFetching: action.isFetching };
    }
    case "followingInProgress": {
      return {
        ...state,
        hideBTN: action.isFetching
          ? [...state.hideBTN, action.userId]
          : state.hideBTN.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

export const followSuccess = (userID) => ({ type: "unfollow", userID });
export const unfollowSuccess = (userID) => ({ type: "follow", userID });
export const setUsers = (users) => ({ type: "setUsers", users });
export const setCurrentPage = (curPage) => ({
  type: "setPage",
  currentPage: curPage,
});
export const setUsersTotalCount = (totalUsers) => ({
  type: "setTotalUsersCount",
  totalUsersCount: totalUsers,
});
export const toggleIsFetching = (isFetching) => ({
  type: "toggleIsFetching",
  isFetching,
});
export const followingInProgress = (isFetching, userId) => ({
  type: "followingInProgress",
  isFetching,
  userId,
});

export const getUsersThunkCreator = (page, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(page));

  let response = await getUsers(page, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.items));
  // dispatch(setUsersTotalCount(response.totalCount));
  dispatch(setUsersTotalCount(100)); // hardCode
};

export const unfollowThunkCreator = (userID) => async (dispatch) => {
  dispatch(followingInProgress(true, userID));
  let response = await unFollow(userID);
  if (response.resultCode === 0) {
    dispatch(unfollowSuccess(userID));
  }
  dispatch(followingInProgress(false, userID));
};

export const followThunkCreator = (userID) => async (dispatch) => {
  dispatch(followingInProgress(true, userID));
  let response = await follow(userID);
  if (response.resultCode === 0) {
    dispatch(followSuccess(userID));
  }
  dispatch(followingInProgress(false, userID));
};

export default UserReducer;
