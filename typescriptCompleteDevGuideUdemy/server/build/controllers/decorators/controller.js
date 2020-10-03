"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
var AppRouter_1 = require("../../AppRouter");
require("reflect-metadata");
function controller(routePrefix) {
    return function (target) {
        var router = AppRouter_1.AppRouter.getInstance();
        // we don't know where it will be applied, only what it is applied to
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key]; // applying this to a class means key would be the functions on a class and target.prototype would be the prototype of that class.
            var path = Reflect.getMetadata("path", target.prototype, key); // get path metadata if there is any.
            if (path) {
                router.get("" + routePrefix + path, routeHandler);
            }
        }
    };
}
exports.controller = controller;
