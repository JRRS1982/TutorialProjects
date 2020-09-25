import { User } from './../models/User';
import { View } from './View';

export class UserForm extends View { // so inheritance
  eventsMap(): { [key: string]: () => void } { // type setting eventsMap that an object will be returned, with a string as key and object as value - that has void return
    return {
      'click:.set-age': this.onSetAgeClick,  // the colon dot :. here is to specify any class names, such as this. You can just click:button, but that would be for all buttons.
      'click:.set-name': this.onSetNameClick 
    };
  }
  
  onSetNameClick = (): void => { // USE ARROW FUNCTIONS
    const input = this.parent.querySelector('input'); // reaching into the DOM to get the input 
    if (input) {
      // element from the HTML - where the name has been written on the page.
      const name = input.value;
      this.model.set({ name }); // short syntax
    }
  }
  
  onSetAgeClick = (): void => { // USE ARROW FUNCTIONS - GETTING SCOPE ISSUES OF THIS WITHOUT THEM
    this.model.setRandomAge();
  }

  template(): string { // template acts as skeleton for structure of an html element, its not yet HTML
    return `
      <div>
        <h1>User Form</u1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input />
        <button class="set-name">Change Name</button>
        <button class="set-age">Set Random Age</button>
      </div>
    `;
  }

}
