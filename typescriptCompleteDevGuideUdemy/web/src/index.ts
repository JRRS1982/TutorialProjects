import { User } from './models/User';
import { UserEdit } from "./views/UserEdit";

const user = User.buildUser({ name: 'Name here', age: 20 });

const root = document.getElementById('root');

if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
  console.log(userEdit);
} else {
  throw new Error('Root element not found');
}
