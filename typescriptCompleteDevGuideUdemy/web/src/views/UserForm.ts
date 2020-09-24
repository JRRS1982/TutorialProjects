import { User } from './../models/User';

export class UserForm {
  constructor(
    public parent: Element, 
    public model: User
  ) {} // adding where this User form is added... so the parent is a HTML Element, and 

  eventsMap(): { [key: string]: () => void } { // type setting eventsMap that an object will be returned, with a string as key and object as value - that has void return
    return {
      'click:button': this.onButtonCLick,
      'mouseenter:h1': this.onHeaderHover,
    };
  }
  
  onButtonCLick(): void {
    console.log('Hi tHere');
  }
  
  template(): string { // template acts as skeleton for structure of an html element, its not yet HTML
    return ` 
      <div>
        <h1>User Form</u1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input />
        <button>Click Me</button>
      </div>
    `;
  }
  
  onHeaderHover(): void { // just a second example
    console.log('Hovered over H1...');
  }
  
  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    
    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':'); // destructuring so split i.e. click:button to eventName = click, selector = button
      
      // fairly complicated - add the above eventsMap to the html fragments
      fragment.querySelectorAll(selector) // return array of elements that match this selector
        .forEach(element => { // HTML element
          element.addEventListener(eventName, eventsMap[eventKey]) // so add the this.onButtonClick value to the click event on the above selector
        })
    }
  }

  render(): void {
    const templateElement = document.createElement('template'); 
    templateElement.innerHTML = this.template();  // here we are using the string from template() and adding it to the templateElement.
    
    this.bindEvents(templateElement.content); // pass in DocumentFragment... i.e. HTML that has not yet been added to dom.
    
    // templateElement, being an HTMLTemplateElement has various attributes, one of those being content, that is the content of the html, i.e. the html itself, that has some reference to a DocumentFragment... the purpose of those is to hold some html in memory before it gets attached to the dom. 
    this.parent.append(templateElement.content); // and append this HTML to the parent element, that may be a div inside the larger document
  }
}
