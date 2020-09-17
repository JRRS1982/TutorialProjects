interface UserProps {
  name: string;
  age: number;
}

export class User {
  constructor(private data: UserProps) {}
  
  public get(propName: string): (number | string) { // type union - return a string or number
    return this.data[propName];
  }
}