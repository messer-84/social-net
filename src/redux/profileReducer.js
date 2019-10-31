import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

const initialState = {
  posts: [
    {
      id: 1,
      message: "Hi, how are you?",
      likesCount: 5
    },
    {
      id: 2,
      message: "It's my first post",
      likesCount: 3
    }
  ],
  newPostText: "",
  profile: null,
  status: "s"
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let body = action.newPostText;
      let { posts } = state;
      let newPost = {
        id: posts.length + 1,
        message: body,
        likesCount: 0
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      };
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = newPostText => ({ type: ADD_POST, newPostText });
export const setUserProfileAC = profile => ({
  type: SET_USER_PROFILE,
  profile
});
export const setStatus = status => {
  return { type: SET_STATUS, status };
};

export const getUserProfile = userId => async dispatch => {
  let responseData = await usersAPI.getProfile(userId);
  dispatch(setUserProfileAC(responseData));
};

export const getStatus = userId => dispatch => {
  profileAPI.getStatus(userId).then(response => {
    if (response) {
      dispatch(setStatus(response));
    }
  });
};

export const updateStatus = status => dispatch => {
  profileAPI.updateStatus(status).then(response => {
    if (response.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};


export default profileReducer;
