import { UserProps, User } from './models/User';
import { Collection } from './models/Collection';
import { UserList } from './views/UserList';


const users = new Collection('http://localhost:3000/users',
  (userProps: UserProps) => {
    return User.buildUser(userProps);
  }
);

users.on('change', () => { 
  const rootHTML = document.getElementById('root');
  if (rootHTML) {
    new UserList(rootHTML, users).render();
  } else {
    throw new Error('Root element not found');
  }
});

users.fetch();
