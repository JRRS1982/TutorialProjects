"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var CsvFileReader_1 = require("./CsvFileReader");
/*
* Data structure of football.csv:
* date / homeTeam / awayTeam / homeScore / awayScore / winner / referee
*/
var reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
console.log(utils_1.dateStringToDate(reader.data[0][0]));
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins);
