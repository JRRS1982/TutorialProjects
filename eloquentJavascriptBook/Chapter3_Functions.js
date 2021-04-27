// https://eloquentjavascript.net/03_functions.html

const min = (a, b) => {
  console.log(Math.min(a, b)); 
}

const isEven = (number) => {
  console.log(number % 2 === 0);
}

const countBs = (string) => {
  let spl = string.split('');
  let result = spl.filter((letter) => { 
    if (letter == "B") {
      return letter;
    }
  });
  console.log(result.length);
}

const countChars = (string, char) => {
  let spl = string.split('');
  let result = spl.filter((letter) => { 
    if (letter == char) {
      return letter;
    }
  });
  console.log(result.length);
}

// min(12, 9);
// isEven(50);
// countBs("asBfaBs");
// countChars("asBfaBs", "B");
