import { HtmlReport } from './reportTargets/HtmlReport';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinsAnalysis } from "./analyzers/WinsAnalysis";

/*
* Data structure of football.csv:
* date / homeTeam / awayTeam / homeScore / awayScore / winner / referee
*/

// create an object that satisfies the "DataReader" interface
const csvFileReader = new CsvFileReader('football.csv');

// the "DataReader" interface - csvFile reader is used here, but it could be replaced with an api reader or other reader as long as it has what MatchReader needs.
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis('Man United'), 
  // new ConsoleReport()
  new HtmlReport()
);

summary.buildAndPrintReport(matchReader.matches);    