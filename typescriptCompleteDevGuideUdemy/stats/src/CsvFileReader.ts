import fs from 'fs'; // import file system rom node standard library to allow us to interact with the computers system.

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
      return row.split(','); //each line/match is a row, and we want to split that row by the commas on it.
    })
  };
}