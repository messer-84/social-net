import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "fae392d4-f439-45a4-831e-31b83d1df367" }
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`).then(response => {
      return response.data;
    });
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then(response => {
      return response.data;
    });
  },
  getProfile(userId) {
    console.warn("Obsolete method. Pleace profileAPI abject.");
    return profileAPI.getProfile(userId);
  }
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then(response => {
      return response.data;
    });
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`).then(response => {
      return response.data;
    });
  },
  updateStatus(status) {
    return instance.put("profile/status/", { status: status }).then(response => {
      return response.data;
    });
  }
};

export const authAPI = {
  me() {
    return instance.get("auth/me");
  }
};
