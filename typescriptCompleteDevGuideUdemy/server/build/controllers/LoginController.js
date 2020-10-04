"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("./decorators");
/**
 * @ controller decorators will look at whatever class we are applying it to, iterate over all prop and check to see if those methods have any metadata, if it does associate that with an express router.
 */
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.getLogin = function (req, res) {
        res.send("\n      <form method=\"POST\">\n        <div>\n          <label>Email<label>\n          <input name=\"email\" />\n        </div>\n        <div>\n          <label>Password<label>\n          <input name=\"password\" type=\"password\" />\n        </div>\n        <button>Submit</button>\n      </form>\n    ");
    };
    LoginController.prototype.postLogin = function (req, res) {
        // express types library imported to set type of the Request and Response.
        var _a = req.body, email = _a.email, password = _a.password; // .body available as we are somehow using body-parser to parse the request. Looking in the body of the request for email... would not have a body to look if middleware was not used.
        // ONLY HAVE ONE USER --- JUST HARD CODE THE USER /PASS
        if (email === "jeremy@code.com" && password === "password") {
            req.session = { loggedIn: true }; // setting an attribute on the session.
            res.redirect("/");
        }
        else {
            res.send("Invalid email or password");
        }
    };
    LoginController.prototype.getLogout = function (req, res) {
        req.session = null;
        res.redirect("/");
    };
    __decorate([
        decorators_1.get("/login") // want to add metadata on getLogin to indicate that it should be called every time a request is made to /login
        ,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getLogin", null);
    __decorate([
        decorators_1.post("/login") // request handlers
        ,
        decorators_1.bodyValidator("email", "password") // validate
        ,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "postLogin", null);
    __decorate([
        decorators_1.get("/logout"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getLogout", null);
    LoginController = __decorate([
        decorators_1.controller("/auth")
    ], LoginController);
    return LoginController;
}());
