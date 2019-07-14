import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  helpers: {
    "API-KEY": "fae392d4-f439-45a4-831e-31b83d1df367"
  }
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
  }
};

export const followAPI = {
  follow(userId) {
    debugger
    return instance.post(`follow/${userId}`).then(response => response.data)
  },
  unfollow(userId) {
    debugger
    return instance.delete(`follow/${userId}`).then(response => response.data)
  }
};
