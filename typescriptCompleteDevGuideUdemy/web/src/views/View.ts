import { User } from "../models/User";

export abstract class View {
  constructor(public parent: Element, public model: User) { // adding where this User form is added... so the parent is a HTML Element, and 
    this.bindModel();
  } 
  
  abstract eventsMap(): { [key: string]: () => void }; // so inheritance style 
  abstract template(): string;

  bindModel(): void { // listen for 'change' on the events, and if there is one re-render the html on the page, so it has the new data that was saved.
    this.model.on('change', () => {
      this.render(); 
    });
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
    this.parent.innerHTML = ''; // remove html from parent, so it is re-rendered with new data
    
    const templateElement = document.createElement('template'); 
    templateElement.innerHTML = this.template();  // here we are using the string from template() and adding it to the templateElement.
    
    this.bindEvents(templateElement.content); // pass in DocumentFragment... i.e. HTML that has not yet been added to dom.
    
    // templateElement, being an HTMLTemplateElement has various attributes, one of those being content, that is the content of the html, i.e. the html itself, that has some reference to a DocumentFragment... the purpose of those is to hold some html in memory before it gets attached to the dom. 
    this.parent.append(templateElement.content); // and append this HTML to the parent element, that may be a div inside the larger document
  }
}