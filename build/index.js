"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// dotenv
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
var auth_1 = __importDefault(require("./routes/auth"));
var passport_1 = __importDefault(require("passport"));
var passport_2 = __importDefault(require("./config/passport"));
dotenv_1.default.config();
var MONGODB_CONNECTION_KEY = process.env.MONGODB_CONNECTION_KEY;
var app = express_1.default();
// body-parser middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// passport auth
passport_2.default(passport_1.default);
passport_1.default.serializeUser(function (user, done) {
    done(null, user);
});
passport_1.default.deserializeUser(function (user, done) {
    done(null, user);
});
app.use(passport_1.default.initialize());
// TODO: remove session use
// app.use(passport.session());
app.use('/auth', auth_1.default);
app.get('/', passport_1.default.authenticate('jwt'), function (req, res) {
    return res.send('<h1>Dummy</h1>');
});
// application routes
// database connection
mongoose_1.default
    .connect(MONGODB_CONNECTION_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(function () { return app.listen(3000); })
    .catch(function (err) { return console.log(err); });
