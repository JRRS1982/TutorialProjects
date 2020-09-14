"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
/*
* Data structure of football.csv:
* date / homeTeam / awayTeam / homeScore / awayScore / winner / referee
*/
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv'); // create an object that satisfies the "DataReader" interface, by using a static method on MatchReader. A lot goes into getting this so short!
var summary = Summary_1.Summary.winsAnalysisWithHTMLReport('Man United'); // as winsAnalysisWithHTMLReport is a static method we don't need to create an instance of the class.
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
