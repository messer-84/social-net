const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';


const initialState = {
  users: [
    {
      id: 1,
      followed: false,
      fullName: 'Dmitry',
      status: 'Boss',
      location: {
        city: 'Minsk',
        country: 'Belarus'
      }
    },
    {
      id: 2,
      followed: true,
      fullName: 'Dmitry 2',
      status: 'Boss 2',
      location: {
        city: 'Minsk',
        country: 'Belarus'
      }
    },

  ]
};

const getUpdatedUsers = (state,id) => {
  return state.users.map(user => {
    if (user.id === id) {
      return {
        ...user,
        followed: true
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
        users: getUpdatedUsers(state, action.payload.id)
      };

    case
    UNFOLLOW:
      return {
        ...state,
        newPostText: action.newText || ''
      };

    default:
      return state;

  }

};

export const followAC = (userId) => ({type: FOLLOW, userId});

export const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId
});

export default usersReducer;
