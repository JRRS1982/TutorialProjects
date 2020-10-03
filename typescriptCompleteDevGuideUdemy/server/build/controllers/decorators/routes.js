"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
require("reflect-metadata");
function get(path) {
    /**
     * returning a function, as this is a decorator factory - find the target / metadata key
     */
    return function (target, key, desc) {
        /**
         * name metadata key of path, add it a value of path, object we are adding it to is target, and the property we are adding this metadata to is key.
         */
        Reflect.defineMetadata("path", path, target, key);
    };
}
exports.get = get;
