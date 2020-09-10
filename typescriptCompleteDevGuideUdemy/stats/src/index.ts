import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

/*
* Data structure of football.csv:
* date / homeTeam / awayTeam / homeScore / awayScore / winner / referee
*/
const reader = new MatchReader('football.csv'); // Match reader is a child of CsVFileReader, and CsvFileReader accepts generic types!
reader.read();

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins}`);
