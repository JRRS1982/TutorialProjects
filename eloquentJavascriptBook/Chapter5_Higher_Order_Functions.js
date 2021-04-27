// https://eloquentjavascript.net/05_higher_order.html

function greaterThan(params) {
  return (m) => m > params;
}

let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11));
// -> true

const flattening = (nestedArray) => {
  return nestedArray.reduce((total, array) => {
    return total.concat(array);
  });
};
// console.log(flattening([[1],[2],[3]]));

const loop = (value, fnTest, fnUpdate, fnBody) => {
  if (fnTest(value)) {
    fnBody(value);
    return loop(fnUpdate(value), fnTest, fnUpdate, fnBody); // recursion again... passing the functions we received to itself, but updating one of the params as it decrements down... 
  }
};
// loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

const every = (array, predicate) => {
  let result = array.filter(element => {
    return predicate(element);
  });
  return array.length == result.length;
}
// console.log(every([1, 3, 5], n => n < 10));
// // → true
// console.log(every([2, 4, 16], n => n < 10));
// // → false
// console.log(every([], n => n < 10));
// // → true


const some = (array, predicate) => {
  let result = array.filter(element => {
    return predicate(element);
  });
  return result.length >= 1;
}


function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}
// console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
// → [{name: false, count: 2}, {name: true, count: 3}]

function characterScript(code) {
  for (let script of SCRIPTS) {  // where SCRIPTS is in the sandbox of the online course.
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}
// console.log(characterScript(121));
// → {name: "Latin", …}


function dominantDirection(text) {
  // Your code here.
  const directions = countBy(text, (char) => { // use above function to get a grouped count of the names of the characters
  	const script = characterScript(char.codePointAt(0)); // getting the full unicode character with codePointAt and running above function on that... pretty sure this does not work with that function as 
    return script ? script.direction : 'none'; 
  }).filter(({ name }) => name != 'none'); // filter out those with no name

  if (directions.length < 2) return directions[0].name;
  return directions.reduce((a, b) => a.count > b.count ? a.name : b.name);
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl

// console.log(dominantDirection("Hello!"));
// // → ltr
// console.log(dominantDirection("Hey, مساء الخير"));
// // → rtl