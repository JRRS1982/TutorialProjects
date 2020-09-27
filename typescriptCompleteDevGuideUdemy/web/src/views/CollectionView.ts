import { Collection } from "../models/Collection";

export abstract class CollectionView<T, K> { // generic - type and properties... as Collection is generic and therefore this needs to be.
  constructor(public  parent: Element, public collection: Collection<T, K>) {} // parent HTML element
  
  abstract renderItem(model: T, itemParent: Element): void; // take in a model and render that to the parent HTML element.
  
  render(): void {
    this.parent.innerHTML = ''; // clear out whatever is in the innerHTML at the moment
    const templateElement = document.createElement('template');
    
    for (let model of this.collection.models) {
      const itemParent = document.createElement('div'); // the item parent we are going to pass into renderItem
      this.renderItem(model, itemParent); // create a view and render into itemParent.
      templateElement.content.append(itemParent); // this is what builds the list - adding this new div to the templateElement
    }
    this.parent.append(templateElement.content);
  }
}