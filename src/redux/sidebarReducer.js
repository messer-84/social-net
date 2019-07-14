const initialState = {
  links: [
    {id: 1, title: 'Profile', url: 'profile'},
    {id: 2, title: 'Messages', url: 'messages'},
    {id: 3, title: 'Users', url: 'users'},
    {id: 4, title: 'News', url: 'news'},
    {id: 5, title: 'Music', url: 'music'},
    {id: 6, title: 'Settings', url: 'settings'}
  ],
  friends: [
    {id: 1, name: 'Dimych', status: 'online'},
    {id: 2, name: 'Andrew', status: 'online'},
    {id: 3, name: 'Sveta', status: 'online'},
    {id: 4, name: 'Sasha', status: 'offline'},
    {id: 5, name: 'Viktor', status: 'offline'},
    {id: 6, name: 'Valera', status: 'offline'},
  ]
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
