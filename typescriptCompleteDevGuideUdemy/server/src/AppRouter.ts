import express from "express";

// singleton class
export class AppRouter {
  private static instance: express.Router; // static method - making this function usable without creating an instance of the class

  static getInstance(): express.Router {
   
    // get the instance if it exists or create a new one if there isn't.
    if (!AppRouter.instance) {
      AppRouter.instance = express.Router();
    }
    return AppRouter.instance;
  }
}
