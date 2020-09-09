import fs from 'fs'; // import file system rom node standard library to allow us to interact with the computers system.
import { MatchResult } from './MatchResult';
import { dateStringToDate } from './utils';


export class CsvFileReader {
  data: string[][] = [];
  constructor(public filename: string) {}
  
  read(): void {
    this.data = fs
    .readFileSync(this.filename, { //its currently one huge string that spans many lines
      encoding: 'utf-8'
    })
    .split('\n') //by new line
    .map((row: string): string[] => { 
      return row.split(','); //each line is a row, and we want to split that row by the commas on it.
    })
    .map((row: string[]): any => { // map through the match details that has now been split into strings
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6]
      ];
    });
  }
}