import { MetadataKeys } from "./MetadataKeys";
import { Methods } from "./Methods";
import { AppRouter } from "../../AppRouter";
import "reflect-metadata";
import { Request, Response, RequestHandler, NextFunction } from "express";

/**
 * return a single request handler - check body has all the keys.
 */
export function bodyValidators(keys: string): RequestHandler {
  // check that there is a req and that the keys above exist in it - if they don't then send a res with an error message, else call next function
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      // if request has no body
      res.status(422).send("Invalid request");
      return;
    }
    for (let key of keys) {
      if (!req.body[key]) {
        // if there is no body on one of the keys
        res.status(422).send(`Missing property: ${key}`);
        return;
      }
    }
    next(); // if successful call next.
  };
}


export function controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();

    // we don't know where it will be applied, only what it is applied to
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key]; // applying this to a class means key would be the functions on a class and target.prototype would be the prototype of that class.

      // get path metadata if there is any.
      const path = Reflect.getMetadata(
        MetadataKeys.path,
        target.prototype,
        key
      );

      /**
       * THIS IS WHAT ITS ALL ABOUT - GETTING THE METHOD THAT HAS BEEN SAVED TO THE METADATA - BIT NEW TO ME - SHOULD
       * BE GET / POST / PUT ETC - all about what
       */
      const method: Methods = Reflect.getMetadata(
        MetadataKeys.method,
        target.prototype,
        key
      );

      const middlewares =
        Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) ||
        []; // we may be trying to add a request handler hat has no middleware so we need to handle that too.

      const requiredBodyProps =
        Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) ||
        [];

      const validator = bodyValidators(requiredBodyProps);

      /**
       * Typescript knows that router can have post/put/get and therefore as we have created a Methods enum with some of
       * these its a closed set of possible values and no longer an any being passed to router.
       */
      if (path) {
        router[method](
          // method
          `${routePrefix}${path}`, // path
          ...middlewares, // update the middlewares
          validator, // run the validator
          routeHandler
        );
      }
    }
  };
}
