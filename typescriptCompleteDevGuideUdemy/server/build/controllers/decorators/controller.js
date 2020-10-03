"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = exports.bodyValidators = void 0;
var MetadataKeys_1 = require("./MetadataKeys");
var AppRouter_1 = require("../../AppRouter");
require("reflect-metadata");
/**
 * return a single request handler - check body has all the keys.
 */
function bodyValidators(keys) {
    // check that there is a req and that the keys above exist in it - if they don't then send a res with an error message, else call next function
    return function (req, res, next) {
        if (!req.body) {
            // if request has no body
            res.status(422).send("Invalid request");
            return;
        }
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!req.body[key]) {
                // if there is no body on one of the keys
                res.status(422).send("Missing property: " + key);
                return;
            }
        }
        next(); // if successful call next.
    };
}
exports.bodyValidators = bodyValidators;
function controller(routePrefix) {
    return function (target) {
        var router = AppRouter_1.AppRouter.getInstance();
        // we don't know where it will be applied, only what it is applied to
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key]; // applying this to a class means key would be the functions on a class and target.prototype would be the prototype of that class.
            // get path metadata if there is any.
            var path = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.path, target.prototype, key);
            /**
             * THIS IS WHAT ITS ALL ABOUT - GETTING THE METHOD THAT HAS BEEN SAVED TO THE METADATA - BIT NEW TO ME - SHOULD
             * BE GET / POST / PUT ETC - all about what
             */
            var method = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.method, target.prototype, key);
            var middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleware, target.prototype, key) ||
                []; // we may be trying to add a request handler hat has no middleware so we need to handle that too.
            var requiredBodyProps = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.validator, target.prototype, key) ||
                [];
            var validator = bodyValidators(requiredBodyProps);
            /**
             * Typescript knows that router can have post/put/get and therefore as we have created a Methods enum with some of
             * these its a closed set of possible values and no longer an any being passed to router.
             */
            if (path) {
                router[method].apply(router, __spreadArrays([
                    // method
                    "" + routePrefix + path], middlewares, [// update the middlewares
                    validator,
                    routeHandler]));
            }
        }
    };
}
exports.controller = controller;
