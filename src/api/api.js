import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "fae392d4-f439-45a4-831e-31b83d1df367"
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  }
};

export const profileAPI = {
  setUserProfile(){
    return instance.get('profile/2')
  }
};

export const authAPI = {
  setAuthUserData(){
    return instance.get('auth/me');
  }
};
