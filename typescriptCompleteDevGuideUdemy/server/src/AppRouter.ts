import express from "express";

/**
 * singleton class
 */
export class AppRouter {
  // static means that we can access this property without having to create an instance of the class.
  private static instance: express.Router;

  // get the instance if it exists or create a new one if there isn't.
  static getInstance(): express.Router {
    if (!AppRouter.instance) {
      AppRouter.instance = express.Router();
    }
    return AppRouter.instance;
  }
}
