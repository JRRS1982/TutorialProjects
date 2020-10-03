"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
var MetadataKeys_1 = require("./MetadataKeys");
require("reflect-metadata");
/**
 * a factory decorator - used when we want our decorator to take an argument.
 */
function use(middleware) {
    // target will be the objects prototype
    return function (target, key, desc) {
        /**
         * instead of storing a single middleware, middlewareS is all that have or are going to be used.
         */
        var middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleware, target, key) || [];
        // save middlewares to metadata for middleware
        Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.middleware, __spreadArrays(middlewares, [middleware]), // all the values from middlewares, and add new middleware
        target, key);
    };
}
exports.use = use;
