import { AppRouter } from "../../AppRouter";
import "reflect-metadata";

export function controller(routePrefix: String) {
  return function (target: Function) {
    const router = AppRouter.getInstance();

    // we don't know where it will be applied, only what it is applied to
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key]; // applying this to a class means key would be the functions on a class and target.prototype would be the prototype of that class.
      const path = Reflect.getMetadata("path", target.prototype, key); // get path metadata if there is any.

      if (path) {
        router.get(`${routePrefix}${path}`, routeHandler);
      }
    }
  };
}
