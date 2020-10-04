import { Request, Response } from "express";
import { get, controller, bodyValidator, post } from "./decorators";

/**
 * @ controller decorators will look at whatever class we are applying it to, iterate over all prop and check to see if those methods have any metadata, if it does associate that with an express router.
 */
@controller("/auth")
class LoginController {
  @get("/login") // want to add metadata on getLogin to indicate that it should be called every time a request is made to /login
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label>Email<label>
          <input name="email" />
        </div>
        <div>
          <label>Password<label>
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
    `);
  }

  @post("/login") // request handlers
  @bodyValidator("email", "password") // validate
  postLogin(req: Request, res: Response) {
    // express types library imported to set type of the Request and Response.
    const { email, password } = req.body; // .body available as we are somehow using body-parser to parse the request. Looking in the body of the request for email... would not have a body to look if middleware was not used.

    // ONLY HAVE ONE USER --- JUST HARD CODE THE USER /PASS
    if (email === "jeremy@code.com" && password === "password") {
      req.session = { loggedIn: true }; // setting an attribute on the session.
      res.redirect("/");
    } else {
      res.send("Invalid email or password");
    }
  }

  @get("/logout")
  getLogout(req: Request, res: Response) {
    req.session = null;
    res.redirect("/");
  }
}
