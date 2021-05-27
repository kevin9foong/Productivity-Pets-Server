"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGoogleOauthCallback = exports.getGoogleOauthSignIn = exports.postLogin = void 0;
var passport_1 = __importDefault(require("passport"));
var user_1 = __importDefault(require("../model/user"));
var userservice_1 = require("../service/userservice");
var authservice_1 = require("../service/authservice");
// TODO: for future non oauth logins
var postLogin = function (req, res) {
    // login logic here.
    res.send('Received');
};
exports.postLogin = postLogin;
exports.getGoogleOauthSignIn = passport_1.default.authenticate('google', {
    scope: ['profile']
});
// Returns JWT token as json response when login is successful.
// TODO: fix the any type assignments
var getGoogleOauthCallback = function (req, res) {
    // if user does not exist, create new user
    // else return jwt of existing user
    if (req.user) {
        return user_1.default.findOne({
            googleId: req.user.googleId
        })
            .then(function (user) {
            if (user) {
                return handleAuthenticated(req, res, user);
            }
            else {
                console.log(req.user);
                return userservice_1.createUser(req.user)
                    .then(function (user) { return handleAuthenticated(req, res, user); })
                    .catch(function (err) { return console.log(err); });
            }
        })
            .catch(function (err) { return console.log(err); });
    }
};
exports.getGoogleOauthCallback = getGoogleOauthCallback;
var handleAuthenticated = function (req, res, user) {
    var token = authservice_1.generateJwt(user);
    return res.json(token);
};
