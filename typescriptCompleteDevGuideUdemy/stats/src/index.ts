import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

/*
* Data structure of football.csv:
* date / homeTeam / awayTeam / homeScore / awayScore / winner / referee
*/

const matchReader = MatchReader.fromCsv('football.csv'); // create an object that satisfies the "DataReader" interface, by using a static method on MatchReader. A lot goes into getting this so short!
const summary = Summary.winsAnalysisWithHTMLReport('Man United'); // as winsAnalysisWithHTMLReport is a static method we don't need to create an instance of the class.

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);