export class UserForm {
  constructor(public parent: Element) {} // adding where this User form is added... so the parent is a HTML element
  
  template(): string { // template acts as skeleton for structure of an html element, its not yet HTML
    return ` 
      <div>
        <h1>User Form</u1>
        <input />
        <button>Click Me</button>
      </div>
    `;
  }
  
  render(): void {
    const templateElement = document.createElement('template'); 
    templateElement.innerHTML = this.template();  // here we are using the string from template() and adding it to the templateElement.
    
    this.parent.append(templateElement.content); // and append this HTML to the parent element, that may be a div inside the larger document
  }
}
