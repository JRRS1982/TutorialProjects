import { Request, Response } from "express";
import { get, controller } from "./decorators";

/**
 * @ controller decorators will look at whatever class we are applying it to, iterate over all prop and check to see if those methods have any metadata, if it does associate that with an express router.
 */
@controller("/auth")
class LoginController {
  @get("/login")
  /**
   * want to add metadata on getLogin to indicate that it should be called every time a request is made to /login
   */
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label>Email<label>
          <input name="email"/>
        </div>
        <div>
          <label>Password<label>
          <input name="password" type="password"/>
        </div>
        <button>Submit</button>
      </form>
    `);
  }
}
