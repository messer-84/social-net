const store = {
  _subscriber(){
    console.log('no subscribers');
  },
  _state: {
    profilePage: {
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
      newPostText: 'Max'
    },
    dialogsPage: {
      messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'yo'},
      ],
      dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
      ],
      newMessageText: ''
    },
    sidebar: {
      links: [
        {id: 1, title: 'Profile', url:'profile'},
        {id: 2, title: 'Messages', url:'messages'},
        {id: 3, title: 'News', url:'news'},
        {id: 4, title: 'Music', url:'music'},
        {id: 5, title: 'Settings', url:'settings'}
      ],
      friends: [
        {id: 1, name: 'Dimych', status: 'online'},
        {id: 2, name: 'Andrew', status: 'online'},
        {id: 3, name: 'Sveta', status: 'online'},
        {id: 4, name: 'Sasha', status: 'offline'},
        {id: 5, name: 'Viktor', status: 'offline'},
        {id: 6, name: 'Valera', status: 'offline'},
      ]
    }
  },
  getState(){
    return this._state;
  },
  subscribe(observer){
    this._subscriber = observer;
  },
  updateNewPostText (newText) {
    this._state.profilePage.newPostText = newText || '';
    this._subscriber(this);

  },
  addPost () {
    const state = this.getState();
    const getPostLength = state.profilePage.posts.length + 1;
    let newPost = {
      id: getPostLength,
      message: state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._subscriber(this);

  },
  addMessage (){
    const state = this.getState();
    const getPostLength = state.dialogsPage.messages.length + 1;
    let newMessage = {
      id: getPostLength,
      message: state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._subscriber(this);

  },
  updateNewMessageText (newText) {
    this._state.dialogsPage.newMessageText = newText || '';
    this._subscriber(this);
  }

};


export default store;
