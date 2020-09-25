import { AxiosPromise, AxiosResponse } from 'axios';

interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface HasId {
  id?: number;
}

export class Model<T extends HasId> { 
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}
  
  /*
  we we returning the events on function, not calling it so user = User.new... then user.on is actually the Events on function. Its acting like a bridge to the events function, we get back a reference to the on method on the eventing class
  const on = user.on;
  on... would then be the events function
  The full implementation would be this... i.e. you are not calling the user function, but the events function.
  user.on('change', ()=> {
    console.log('user was changed')
  });
  */
 
  
  /*  reference to the events on function, so when user.on() is called events on is what is actually called thanks to the get.
    this is the same as the trigger function below, but shortened further. Access to the events and attributes objects IS ONLY AVAILABLE AS WE PASS THIS IN, IT WOULD NOT WORK IF IT WAS CONTAINED IN THE CONSTRUCTOR
  */
  on =  this.events.on;
  get = this.attributes.get;
  
  get trigger() {
    return this.events.trigger;
  }

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.get('id'); // same as this.attributes.get('id') as its referring to that above
    
    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }
    
    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data); // calling set from above, which calls attributes.set, but also events.trigger
    });
  }

  save(): void {
    this.sync.save(this.attributes.getAll())  // so using the sync class save function with attributes class getAll function in a nice little way.
      .then((response: AxiosResponse): void => { // but above doesn't return anything, so lets trigger an event called save
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error'); // or catch the error if the save is not successful
      });
  }
}