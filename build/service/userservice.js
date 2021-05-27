"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
var user_1 = __importDefault(require("../model/user"));
var createUser = function (user) {
    var userModel = new user_1.default({
        googleId: user.googleId,
        name: user.name,
        avatar: user.avatar
    });
    return userModel.save();
};
exports.createUser = createUser;
