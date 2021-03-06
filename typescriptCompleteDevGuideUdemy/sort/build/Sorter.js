"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.bubbleSort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) { // for each element in the original
            for (var k = 0; k < length - i - 1; k++) { // loop the left element, for all of i... but shorten i each time as the left element will have been put in order.
                if (this.compare(k, k + 1)) {
                    this.swap(k, k + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
