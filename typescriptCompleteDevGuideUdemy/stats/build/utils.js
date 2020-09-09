"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
exports.dateStringToDate = function (dateString) {
    var dateNumbers = dateString
        .split('/') // split date by.. 
        .map(function (value) {
        return parseInt(value); // parse each string in the newly split array of strings to an int.
    });
    return new Date(dateNumbers[2], dateNumbers[1] - 1, dateNumbers[0]);
};
