import { AppRouter } from "./AppRouter";
import express, { Request, Response } from 'express';
import { router } from "./routes/loginRoutes";
import bodyParser from 'body-parser';
import cookieSession from "cookie-session";
import "./controllers/LoginController";

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); // add body property property to the request object.
app.use(cookieSession({ keys: ['aaa']})); // add sessions to request object, a session property would not exist without it. Options object being passed in, what this is what is being used to encrypt the cookie.
app.use(router);
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Listening on port 3000');
});