import fs from 'fs'; // import file system rom node standard library to allow us to interact with the computers system.

const matches = fs.readFileSync('football.csv', { 
  encoding: 'utf-8'
  })
  .split('\n') //by new line
  .map((row: string): string[] => { // the return type is an array of strings.
  return row.split(','); // split the row by comma between elements.
});

let manUnitedWins = 0;

/*
* Data structure:
* date / homeTeam / awayTeam / homeScore / awayScore / winner / referee
*/

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === 'H') { // if man u are home home win
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === 'A') { // if man u are away and away win
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins}`);
