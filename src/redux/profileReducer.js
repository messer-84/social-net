const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


const initialState = {
  posts: [
    {
      id: 1,
      message: 'Hi, how are you?',
      likesCount: 5
    },
    {
      id: 2,
      message: 'It\'s my first post',
      likesCount: 3
    },
  ],
  newPostText: '',
  profile: null
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_POST: {
      let {posts, newPostText} = state;
      let newPost = {
        id: posts.length + 1,
        message: newPostText,
        likesCount: 0
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText : action.newText || ''
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.payload
      }
    }
    default:
      return state;

  }

};

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfileAC = (profile) => {
  console.log('prof', profile);

  return {type: SET_USER_PROFILE, payload: profile}

};

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export default profileReducer;
