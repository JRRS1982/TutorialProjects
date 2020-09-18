import axios from 'axios';

axios.post('http://localhost:3000/users', {  // the json-server is running on local host 3000, therefore to make a request to create a user we post to that with the properties we want to add.
  name: 'myName',
  age: 20
});
