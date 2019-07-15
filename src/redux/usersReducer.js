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
      return {...state, isFetching: !state.isFetching};

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

export const followAC = (userId) => ({type: FOLLOW, payload: userId});

export const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  payload: userId
});

export const setUsersAC = (users) => ({type: SET_USERS, payload: users});

export const setTotalUsersCountAC = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  payload: totalUsersCount
});

export const setCurrentPageAC = (pageNumber) => ({type: SET_CURRENT_PAGE, payload: pageNumber});

export const toggleIsFetchingAC = () => ({type: TOGGLE_FETCHING});
export const toggleFollowingProgressAC = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  payload: {
    isFetching, userId
  }
});

export default usersReducer;
