import "reflect-metadata";
import { MetadataKeys } from "./MetadataKeys";

/**
 * check keys exist in the request body.
 */
export function bodyValidator(...keys: string[]) {
  // check for various things (keys)
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(MetadataKeys.validator, keys, target, key);
  };
}
