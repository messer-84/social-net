import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
};

const getUpdatedUsers = (state, id) => {
  return state.users.map(user => {
    if (user.id === id) {
      return {
        ...user,
        followed: !user.followed
      }
    }
    return user;
  });
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: getUpdatedUsers(state, action.payload)
      };
    case UNFOLLOW:
      return {
        ...state,
        users: getUpdatedUsers(state, action.payload)
      };
    case SET_USERS:
      return {...state, users: [...action.payload]};

    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.payload};

    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.payload};

    case TOGGLE_FETCHING:
      return {...state, isFetching: action.payload.isFetching};

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.payload.isFetching
          ? [...state.followingInProgress, action.payload.userId]
          : [...state.followingInProgress.filter(id => id !== action.payload.userId)]
      };


    default:
      return state;
  }
};

export const followSuccess = (userId) => ({type: FOLLOW, payload: userId});

export const unfollowSuccess = (userId) => ({
  type: UNFOLLOW,
  payload: userId
});

export const setUsers = (users) => ({type: SET_USERS, payload: users});

export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  payload: totalUsersCount
});

export const setCurrentPageAC = (pageNumber) => ({type: SET_CURRENT_PAGE, payload: pageNumber});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_FETCHING,
  payload: {isFetching}
});

export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  payload: {
    isFetching, userId
  }
});

export const requestUsers = (page, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPageAC(page));

    usersAPI.getUsers(page, pageSize)
      .then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
      });

  }
};

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.follow(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(followSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
      });
  }
};


export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.unfollow(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(unfollowSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
      });
  }
};

export default usersReducer;
