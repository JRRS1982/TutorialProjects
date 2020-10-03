"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AppRouter_1 = require("./AppRouter");
var express_1 = __importDefault(require("express"));
var loginRoutes_1 = require("./routes/loginRoutes");
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
require("./controllers/LoginController");
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true })); // add body property property to the request object.
app.use(cookie_session_1.default({ keys: ['aaa'] })); // add sessions to request object, a session property would not exist without it. Options object being passed in, what this is what is being used to encrypt the cookie.
app.use(loginRoutes_1.router);
app.use(AppRouter_1.AppRouter.getInstance());
app.listen(3000, function () {
    console.log('Listening on port 3000');
});
