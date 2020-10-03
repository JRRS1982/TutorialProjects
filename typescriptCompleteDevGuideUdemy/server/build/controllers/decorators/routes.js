"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.del = exports.put = exports.post = exports.get = void 0;
var MetadataKeys_1 = require("./MetadataKeys");
var Methods_1 = require("./Methods");
require("reflect-metadata");
/**
 * route binder is being called with various strings below, that is going to return a factory decorator, that factory
 * decorator has a reference back to the method argument it is provided. So this creates a decorator, for each of the
 * methods that is is provided (get post etc) and that decorator is provided a path (/auth etc). For every route handler
 * that gets associated with the 'get', 'post' etc decorators is going to have a 'method' metadata associated to it. So
 * for every route handler we know that path and the method associate with it. THIS IS EXPERT LEVEL STUFF AND NEW TO ME!
 */
function routeBinder(method) {
    return function (path) {
        // returning a function, as this is a decorator factory - find the target / metadata key
        return function (target, key, desc) {
            // the value attribute of Property descriptor is set as a RequestHandler
            // name metadata key of path, add it a value of path, object we are adding it to is target, and the property we are adding this metadata to is key.
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.path, path, target, key);
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.method, method, target, key);
        };
    };
}
exports.get = routeBinder(Methods_1.Methods.get);
exports.post = routeBinder(Methods_1.Methods.post);
exports.put = routeBinder(Methods_1.Methods.put);
exports.del = routeBinder(Methods_1.Methods.del);
exports.patch = routeBinder(Methods_1.Methods.patch);
