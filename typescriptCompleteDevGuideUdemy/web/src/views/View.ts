import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K> { // weird one - all views need to comply to model anyway, so no need to define new interfaces as that interface would need to have all the properties in Model anyway, so the interface would just be a duplicate of model, but model is a generic which needs a type itself! Model is created with the Model<K>, but K is being passed in from the second entry ... ,K
  regions: { [keys: string]:Element } = {};
  
  constructor(public parent: Element, public model: T) { // adding where this User form is added... so the parent is a HTML Element, and 
    this.bindModel();
  }

  abstract template(): string;  // so inheritance style, children need abstract method

  regionsMap(): { [key: string]: string } { // region is a reference to some element that we want to render a view
    return {};
  }
  
  eventsMap(): { [key: string]: () => void } { // was an abstract class, added so we don't need to define it in all the children of View - can be used, but doesn't need to be and can be overwritten if appropriate. Basically it holds key value pairs of i.e. events that then can be mapped over by other functions
    return {};
  };

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

  mapRegions(fragment: DocumentFragment): void { // takes HTML fragment thats not HTML yet
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];  // the selector aka key from the regions map aka what the class name / id is like .user-show or .user-form
      const element = fragment.querySelector(selector); // IN THIS LOOP WE ARE BASICALLY MAKING THE VIEW, ADDING REGIONS THAT ARE IN THE REGIONS MAP TO THE REGIONS OF THE PAGE

      if (element) {
        this.regions[key] = element;
      }
    }
  }

  onRender(): void {} // prime location to do view nesting... 

  render(): void {
    this.parent.innerHTML = ''; // remove html from parent, so it is re-rendered with new data
    const templateElement = document.createElement('template'); 
    templateElement.innerHTML = this.template();  // here we are using the string from template() and adding it to the templateElement.
    this.bindEvents(templateElement.content); // pass in DocumentFragment... i.e. HTML that has not yet been added to dom.
    this.mapRegions(templateElement.content);
    this.onRender(); // event handler for render
    // templateElement, being an HTMLTemplateElement has various attributes, one of those being content, that is the content of the html, i.e. the html itself, that has some reference to a DocumentFragment... the purpose of those is to hold some html in memory before it gets attached to the dom. 
    this.parent.append(templateElement.content); // and append this HTML to the parent element, that may be a div inside the larger document
  }
}