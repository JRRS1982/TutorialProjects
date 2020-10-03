import { MetadataKeys } from "./MetadataKeys";
import { Methods } from "./Methods";
import { AppRouter } from "../../AppRouter";
import "reflect-metadata";

export function controller(routePrefix: String) {
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

      /**
       * Typescript knows that router can have post/put/get and therefore as we have created a Methods enum with some of
       * these its a closed set of possible values and no longer an any being passed to router.
       */
      if (path) {
        router[method](`${routePrefix}${path}`, routeHandler); // method = get/post etc
      }
    }
  };
}
