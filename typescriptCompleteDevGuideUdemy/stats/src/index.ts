import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

/*
* Data structure of football.csv:
* date / homeTeam / awayTeam / homeScore / awayScore / winner / referee
*/

// create an object that satisfies the "DataReader" interface
const csvFileReader = new CsvFileReader('football.csv');

// the "DataReader" interface - csvFile reader is used here, but it could be replaced with an api reader or other reader as long as it has what MatchReader needs.
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = Summary.winsAnalysisWithHTMLReport('Man United'); // as winsAnalysisWithHTMLReport is a static method we don't need to create an instance of the class.

summary.buildAndPrintReport(matchReader.matches);