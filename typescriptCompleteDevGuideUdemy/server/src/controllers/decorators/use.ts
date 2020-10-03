import { MetadataKeys } from "./MetadataKeys";
import "reflect-metadata";
import { RequestHandler } from "express";

/**
 * a factory decorator - used when we want our decorator to take an argument.
 */
export function use(middleware: RequestHandler) {
  // target will be the objects prototype
  return function (target: any, key: string, desc: PropertyDescriptor) {
    /**
     * instead of storing a single middleware, middlewareS is all that have or are going to be used.
     */
    const middlewares =
      Reflect.getMetadata(MetadataKeys.middleware, target, key) || [];

    // save middlewares to metadata for middleware
    Reflect.defineMetadata(
      MetadataKeys.middleware,
      [...middlewares, middleware], // all the values from middlewares, and add new middleware
      target,
      key
    );
  };
}
