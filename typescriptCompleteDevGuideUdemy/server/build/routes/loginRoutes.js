"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
function requireAuth(req, res, next) {
    // next = next middleware that we want to call - from Router
    if (req.session && req.session.loggedIn) {
        next(); // move onto next handler
        return;
    }
    res.status(403);
    res.send("Not Permitted");
}
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password; // .body available as we are somehow using body-parser to parse the request. Looking in the body of the request for email... would not have a body to look if middleware was not used.
    if (email && password && email === "dev" && password === "dev") {
        // HARD CODE USER/PASS
        req.session = { loggedIn: true }; // setting an attribute on the session.
        res.redirect("/");
    }
    else {
        res.send("Invalid email or password");
    }
});
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n      <div>\n        <div>You are logged in</div>\n        <a href=\"/logout\">Logout</a>\n      </div>\n    ");
    }
    else {
        res.send("\n      <div>\n        <div>You are not logged in</div>\n        <a href=\"/login\">Login</a>\n      </div>\n    ");
    }
});
router.get('/logout', function (req, res) {
    req.session = null;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (req, res) {
    res.send('Welcome to the protected route, you are a logged in user');
});
