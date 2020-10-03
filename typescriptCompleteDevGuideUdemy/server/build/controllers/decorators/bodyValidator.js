"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyValidator = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("./MetadataKeys");
/**
 * check keys exist in the request body.
 */
function bodyValidator() {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    // check for various things (keys)
    return function (target, key, desc) {
        Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.validator, keys, target, key);
    };
}
exports.bodyValidator = bodyValidator;
