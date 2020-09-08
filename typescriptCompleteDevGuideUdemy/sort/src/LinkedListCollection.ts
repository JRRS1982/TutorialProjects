import { Sorter } from "./Sorter";

class Node { // a node/element in the linked list.
  next: Node | null = null;  // reference to the next element in the list.
  constructor(public data: number){}
}

// A linked list requires a node... that node has a reference to the next element in the list and its own value.
export class LinkedList extends Sorter {
  constructor() {
    super(); // inherit from Sorter
  }
  
  head: Node | null = null; // the list starts empty - head is the first element in the list.

  add(data: number): void {
    const node = new Node(data);
    if (!this.head){ 
      this.head = node;
      return;
    }
    let tail = this.head; // tail is head... 
    while (tail.next) {  // if there is a next attribute on the node (tail/head are Node's in a list) move tail along the list... the last node will not have a next attribute.
      tail = tail.next; 
    }
    tail.next = node; // on the 
  }

  get length(): number { // using get as prefix to remove requirement to call this as a function
    if (!this.head) {
      return 0;
    }
    let length = 1;
    let node = this.head;
    while (node.next) { // while there is a next attribute... loop through the list.
      length++;
      node = node.next;
    }
    return length;
  }
  
  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }
    let counter = 0;
    let node: Node | null = this.head; // the "next" of the last element is going to be null.
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error('Index out of bounds'); // we have iterated the whole list, and if we have not yet returned its not correct.
  }
  
  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('Empty list');
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }
  
  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);
    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }
  
  print(): void {
    if (!this.head) {
      return;
    }
    let node: Node | null = this.head; 
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}