"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs")); // import file system rom node standard library to allow us to interact with the computers system.
var matches = fs_1.default.readFileSync('football.csv', {
    encoding: 'utf-8'
})
    .split('\n') //by new line
    .map(function (row) {
    return row.split(','); // split the row by comma between elements.
});
var manUnitedWins = 0;
/*
* Data structure:
* date / homeTeam / awayTeam / homeScore / awayScore / winner / referee
*/
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === 'Man United' && match[5] === 'H') { // if man u are home home win
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === 'A') { // if man u are away and away win
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins);
