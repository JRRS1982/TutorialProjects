export class Attributes<T> {
  constructor(private data: T) {}
  /*
  Ok crazy shit happening here... using keys of a generic type to make it reusable.
  <K extends keyof T>  = setups up a generic constraint, i.e. K can only be a KEYOF type t which is in the constructor - which is UserProps in this case.
  (key: K): T[K] = we are passing in a string, but that string has be match the KEY of the TYPE... i.e. (key) name of (type) UserProps
  with a = after get and => before { the get functions is now an arrow / bound function, which solves a scope issue.
  */
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  }

  // changes information about a user, returns nothing and what is passed has to comply with UserProps
  set(update: T): void {
    Object.assign(this.data, update);
  }
  
  getAll(): T {
    return this.data;
  }
}

/*
BASICALLY THIS IS TO ENSURE THAT THE GET METHOD RETURNS THE RIGHT TYPE, NOT STRING | NUMBER
*/

// const attrs = new Attributes<UserProps>({
//   id: 4,
//   age: 20, 
//   name: 'aaa'
// });

// const name = attrs.get('age');
// const name = attrs.get('id');
// const name = attrs.get('name');
