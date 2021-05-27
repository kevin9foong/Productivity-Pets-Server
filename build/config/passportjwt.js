"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_jwt_1 = require("passport-jwt");
var dotenv_1 = __importDefault(require("dotenv"));
var user_1 = __importDefault(require("../model/user"));
dotenv_1.default.config();
var SYMMETRIC_JWT_SECRET = process.env.SYMMETRIC_JWT_SECRET;
var options = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SYMMETRIC_JWT_SECRET
    //   issuer
    //   audience
};
// TODO: WIP on this jwt strat
var jwtStrategy = new passport_jwt_1.Strategy(options, function (payload, done) {
    // payload.sub stores the mongodb user _id information
    var user = user_1.default.findById(payload.sub);
    if (user) {
        return done(null, user);
    }
    else {
        return done(null, false);
    }
});
exports.default = jwtStrategy;
