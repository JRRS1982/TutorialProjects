"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HtmlReport_1 = require("./reportTargets/HtmlReport");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
/*
* Data structure of football.csv:
* date / homeTeam / awayTeam / homeScore / awayScore / winner / referee
*/
// create an object that satisfies the "DataReader" interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// the "DataReader" interface - csvFile reader is used here, but it could be replaced with an api reader or other reader as long as it has what MatchReader needs.
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), 
// new ConsoleReport()
new HtmlReport_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
