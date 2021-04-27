// https://eloquentjavascript.net/02_program_structure.html

function loopATriangle(times) {
  let output = '';
  for (let index = 0; index <= times; index++) {
    output += '#';
    console.log(output);
  }
}

function fizzBuzz(number) {
  let output = '';
  for (let index = 0; index <= number; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log('fizzBuzz');
      continue;
    }

    if (index % 3 === 0) {
      console.log('fizz');
      continue;
    }

    if (index % 5 === 0) {
      console.log('buzz');
      continue; 
    }
    console.log(index);
  }
}

function chessboard() {
  for (let row = 0; row < 8; row++) {
    let rowItem = ''
    for (let column = 0; column < 8; column++) {
      if (row % 2 === 0 && column % 2 === 0) {
        rowItem += " ";
        continue;
      }
      if (row % 2 === 1 && column % 2 === 1) {
        rowItem += ' ';
        continue;
      }            
      rowItem += '#';
    }
    console.log(rowItem);
  }
}

// loopATriangle(7);
// fizzBuzz(100);
// chessboard();
