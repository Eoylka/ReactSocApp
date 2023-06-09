import { createSelector } from "reselect";

export const getUsers = (state) => {
  return state.usersPage.users;
};

export const getUsersSelector = (state) => {
  return getUsers(state).filter((u) => true);
};

export const getUserSuperSelector = createSelector(getUsers, (users) => {
  return users.filter((u) => true);
});

export const getpageSize = (state) => {
  return state.usersPage.pageSize;
};

export const totalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};

export const currentPage = (state) => {
  return state.usersPage.currentPage;
};

export const isFetching = (state) => {
  return state.usersPage.isFetching;
};

export const hideBTN = (state) => {
  return state.usersPage.hideBTN;
};
