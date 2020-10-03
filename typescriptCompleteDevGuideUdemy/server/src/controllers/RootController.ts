import { Request, Response, NextFunction } from "express";
import { controller, get, use } from "./decorators";

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  // next = next middleware that we want to call - from Router
  if (req.session && req.session.loggedIn) {
    next(); // move onto next handler
    return;
  }
  res.status(403);
  res.send("Not Permitted");
}

@controller("")
class RootController {
  @get("/")
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/auth/logout">Logout</a>
      </div>
    `);
    } else {
      res.send(`
      <div>
        <div>You are not logged in</div>
        <a href="/auth/login">Login</a>
      </div>
    `);
    }
  }

  @get("/protected")
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    // requireAuth to ensure you cant get there without auth...
    res.send("Welcome to the protected route, you are a logged in user");
  }
}
