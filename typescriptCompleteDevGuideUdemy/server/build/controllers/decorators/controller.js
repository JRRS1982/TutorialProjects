"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
var MetadataKeys_1 = require("./MetadataKeys");
var AppRouter_1 = require("../../AppRouter");
require("reflect-metadata");
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
            /**
             * Typescript knows that router can have post/put/get and therefore as we have created a Methods enum with some of
             * these its a closed set of possible values and no longer an any being passed to router.
             */
            if (path) {
                router[method]("" + routePrefix + path, routeHandler); // method = get/post etc
            }
        }
    };
}
exports.controller = controller;
