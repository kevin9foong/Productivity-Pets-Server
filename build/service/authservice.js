"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJwt = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var SYMMETRIC_JWT_SECRET = process.env.SYMMETRIC_JWT_SECRET;
var generateJwt = function (user) {
    var expiresIn = '1 hour';
    var secret = SYMMETRIC_JWT_SECRET;
    var token = jsonwebtoken_1.default.sign({}, secret, {
        expiresIn: expiresIn,
        subject: user._id.toString()
    });
    return token;
};
exports.generateJwt = generateJwt;
