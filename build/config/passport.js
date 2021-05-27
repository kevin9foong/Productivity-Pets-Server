"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passportgoogleoauth20_1 = __importDefault(require("./passportgoogleoauth20"));
var passportjwt_1 = __importDefault(require("./passportjwt"));
exports.default = (function (passport) {
    passport.use(passportgoogleoauth20_1.default);
    passport.use(passportjwt_1.default);
});
