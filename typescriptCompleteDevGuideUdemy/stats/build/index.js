"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs")); // import file system rom node standard library to allow us to interact with the computers system.
/*
* Data structure of football.csv:
* date / homeTeam / awayTeam / homeScore / awayScore / winner / referee
*/
var matches = fs_1.default
    .readFileSync('football.csv', {
    encoding: 'utf-8'
})
    .split('\n') //by new line
    .map(function (row) {
    return row.split(','); //each line is a row, and we want to split that row by the commas on it.
});
var MatchResult = {
    HomeWin: 'H',
    AwayWin: 'A',
    Draw: 'D',
};
var manUnitedWins = 0;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins);
