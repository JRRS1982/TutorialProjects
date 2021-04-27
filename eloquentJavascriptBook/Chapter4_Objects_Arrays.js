// https://eloquentjavascript.net/04_data.html

const range = (startNumber, endNumber, increment = 1) => {
  let result = [];
  for (let index = startNumber; index <= endNumber; index+= increment) {
    result.push(index);
  }
  return(result);
}

const sum = (numbers) => {
  return numbers.reduce((total, num) => total += num );
}
// console.log(sum(range(1,10,-1)));

const reverseArray = (array) => {
  let result = [];
  array.map((item) => result.unshift(item));
  return result;
}
// console.log(reverseArray([1,2,3]));

const reverseArray2 = (array) => {
  let result = []
  for (let index = array.length - 1; index >= 0; index--) { // loop backwards... start from end, until 0, decrement.
    result.push(array[index]);
  }
  return result;
}
// console.log(reverseArray2([1,2,3]));

const reverseArrayInPlace = (array) => {
  return array.reverse();
}
// console.log(reverseArrayInPlace([1,2,3]));


const arrayToList = (array) => {
  let list = null;
  for (let index = array.length - 1; index >= 0; index--) { // loop from end of array, until 0, decrement
    list = { value: array[index], rest: list }; // redeclare what list is after each iteration, adding to what list is each time.
  }
  return list;
}
// console.log(arrayToList([10,20]));


const listToArray = (list) => {
  array = []; 
  for (let node = list; node; node = node.rest) { // we are passing in a linked list, and stepping through the nodes in that list until the end... i.e. until there is no rest property on the next node.
    array.push(node.value);
  }
  return array;
}
// console.log(listToArray({ value: 10, rest: { value: 20, rest: null }}));

const prepend = (element, list) => { // adding a new element to a list
  let array = listToArray(list); 
  array.unshift(element);
  return arrayToList(array);
}
// console.log(prepend(13, { value: 10, rest: { value: 20, rest: null }}));

const nth = (list, position) => {
  let array = listToArray(list);
  return arrayToList([array[position]]);
}
// console.log(nth({ value: 10, rest: { value: 20, rest: null }}, 4));


function deepEqual(a, b) {
  if (a === b) return true;
  if (a == null || typeof a != 'object' || b == null || typeof b != 'object') return false;
  
  var propsInA = 0, propsInB = 0;
  
  for (var _ in a) // loop through each one of the first object
    propsInA += 1;
  
    for (var prop in b) { // compare to every element in b
      propsInB += 1;
      if (!(prop in a) || !deepEqual(a[prop], b[prop])) {   // we compare the properties of the child nodes, and first equality matcher on deepEqual will return true if they match (and not increment the counter), if they don't it will return false and the counter will not match when we hit the last node.
        return false;
      }
    }
  return propsInA == propsInB;
}
// var obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// // → true
// console.log(deepEqual(obj, null));
// // → false