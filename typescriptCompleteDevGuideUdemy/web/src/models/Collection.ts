import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

export class Collection<T, K> { // user = T and userProps = K 
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(
    public rootUrl: string,
    public deserialize: (json: K) => T // take json data and create an instance of a model. This is important to make this reusable
  ) {}
  
  get on() { // cant use the shortened syntax in here as events is not passed in therefore in constructor / after this function
    return this.events.on;
  }
  
  get trigger() {
    return this.events.trigger;
  }
  
  fetch(): void {
    axios.get(this.rootUrl)  // get from whatever the url is
      .then((response: AxiosResponse) => { // with the response which is a response from Axios
          response.data.forEach((value: K) => { // loop on each element in data which complies with UserProps / K as a generic
          this.models.push(this.deserialize(value)); // use deserialize as a function from the constructor here to turn the data in the response from axios into a Model object, i would have been user... but anything that complies to Model
        });
        this.trigger('change');
      }
    );
  }
}