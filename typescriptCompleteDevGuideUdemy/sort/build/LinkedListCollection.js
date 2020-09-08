"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null; // reference to the next element in the list.
    }
    return Node;
}());
// A linked list requires a node... that node has a reference to the next element in the list and its own value.
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null; // the list starts empty - head is the first element in the list.
    }
    LinkedList.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        var tail = this.head; // tail is head... 
        while (tail.next) { // if there is a next attribute on the node (tail/head are Node's in a list) move tail along the list... the last node will not have a next attribute.
            tail = tail.next;
        }
        tail.next = node; // on the 
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head) {
                return 0;
            }
            var length = 1;
            var node = this.head;
            while (node.next) { // while there is a next attribute... loop through the list.
                length++;
                node = node.next;
            }
            return length;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        if (!this.head) {
            throw new Error('Index out of bounds');
        }
        var counter = 0;
        var node = this.head; // the "next" of the last element is going to be null.
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Index out of bounds'); // we have iterated the whole list, and if we have not yet returned its not correct.
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('Empty list');
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    };
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        var leftNode = this.at(leftIndex);
        var rightNode = this.at(rightIndex);
        var leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    };
    LinkedList.prototype.print = function () {
        if (!this.head) {
            return;
        }
        var node = this.head;
        while (node) {
            console.log(node.data);
            {
                node = node.next;
            }
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
