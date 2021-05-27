"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_google_oauth20_1 = require("passport-google-oauth20");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
var GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
var GOOGLE_CALLBACK_URL = process.env.GOOGLE_CALLBACK_URL;
var options = {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: GOOGLE_CALLBACK_URL // url to be redirected to once client logs in successfully.
};
var googleStrategy = new passport_google_oauth20_1.Strategy(options, function (accessToken, refreshToken, profile, done) {
    return done(null, mapGoogleProfileToUser(profile));
});
var mapGoogleProfileToUser = function (googleProfile) {
    return {
        googleId: googleProfile.id,
        name: googleProfile.displayName,
        avatar: googleProfile.photos ? googleProfile.photos[0].value : ''
    };
};
exports.default = googleStrategy;
