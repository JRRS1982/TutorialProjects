"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) { // for each element in the original
            for (var k = 0; k < length - i - 1; k++) { // loop the left element, for all of i... but shorten i each time as the left element will have been put in order.
                if (this.collection[k] > this.collection[k + 1]) { // if right is bigger then the left.
                    var temp = this.collection[k]; // save the left side value for use in a moment.
                    this.collection[k] = this.collection[k + 1]; // set the left side to the right value
                    this.collection[k + 1] = temp; // set the right side as the left value. 
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, 3, -2, 0]);
sorter.sort();
console.log(sorter.collection);
