import fs from 'fs'; // import file system rom node standard library to allow us to interact with the computers system.

/*
* Data structure of football.csv:
* date / homeTeam / awayTeam / homeScore / awayScore / winner / referee
*/

const matches = fs
  .readFileSync('football.csv', { //its currently one huge string that spans many lines
  encoding: 'utf-8'
  })
  .split('\n') //by new line
  .map((row: string): string[] => { 
  return row.split(','); //each line is a row, and we want to split that row by the commas on it.
});


const MatchResult = {
  HomeWin: 'H',
  AwayWin: 'A',
  Draw: 'D',
};

let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins}`);
