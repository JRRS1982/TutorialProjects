import "reflect-metadata";

export function get(path: string) {
  /**
   * returning a function, as this is a decorator factory - find the target / metadata key
   */
  return function (target: any, key: string, desc: PropertyDescriptor) {
    /**
     * name metadata key of path, add it a value of path, object we are adding it to is target, and the property we are adding this metadata to is key.
     */
    Reflect.defineMetadata("path", path, target, key);
  };
}
