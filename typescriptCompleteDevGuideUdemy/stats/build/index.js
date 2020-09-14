"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
/*
* Data structure of football.csv:
* date / homeTeam / awayTeam / homeScore / awayScore / winner / referee
*/
// create an object that satisfies the "DataReader" interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// the "DataReader" interface - csvFile reader is used here, but it could be replaced with an api reader or other reader as long as it has what MatchReader needs.
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var summary = Summary_1.Summary.winsAnalysisWithHTMLReport('Man United'); // as winsAnalysisWithHTMLReport is a static method we don't need to create an instance of the class.
summary.buildAndPrintReport(matchReader.matches);
