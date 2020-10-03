import { Methods } from './Methods';
import "reflect-metadata";

/**
 * route binder is being called with various strings below, that is going to return a factory decorator, that factory 
 * decorator has a reference back to the method argument it is provided. So this creates a decorator, for each of the
 * methods that is is provided (get post etc) and that decorator is provided a path (/auth etc). For every route handler
 * that gets associated with the 'get', 'post' etc decorators is going to have a 'method' metadata associated to it. So
 * for every route handler we know that path and the method associate with it. THIS IS EXPERT LEVEL STUFF AND NEW TO ME!
 */
function routeBinder(method: string) {
  return function  (path: string) {
    // returning a function, as this is a decorator factory - find the target / metadata key
    return function (target: any, key: string, desc: PropertyDescriptor) {
      // name metadata key of path, add it a value of path, object we are adding it to is target, and the property we are adding this metadata to is key.
      Reflect.defineMetadata("path", path, target, key);
      Reflect.defineMetadata("method", method, target, key);
    };
  };;
}

export const get = routeBinder(Methods.get);
export const post = routeBinder(Methods.post);
export const put = routeBinder(Methods.put);
export const del = routeBinder(Methods.del);
