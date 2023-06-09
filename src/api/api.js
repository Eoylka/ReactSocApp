import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "e8efd112-dc0b-4152-8a8d-6777d16b6f71",
  },
});

export const getUsers = (currentPage = 1, pageSize = 8) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`, {
      withCredentials: true,
    })
    .then((response) => {
      return response.data;
    });
};

export const unFollow = (id) => {
  return instance.delete(`follow/${id}`).then((response) => {
    return response.data;
  });
};

export const follow = (id) => {
  return instance.post(`follow/${id}`).then((response) => {
    return response.data;
  });
};

export const getProfile = (userId) => {
  return instance.get(`profile/` + userId).then((response) => {
    return response.data;
  });
};

export const myProfile = () => {
  return instance.get("auth/me").then((response) => {
    return response.data;
  });
};

export const profileAPI = {
  getStatus(userId) {
    return instance.get("profile/status/" + userId);
  },
  updateStatus(status) {
    return instance.put("profile/status/", { status: status });
  },
};

export const authAPI = {
  login(email, password, rememberMe = false) {
    return instance.post("auth/login", { email, password, rememberMe });
  },

  logOut() {
    return instance.delete("auth/login");
  },
};
