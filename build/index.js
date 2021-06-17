"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("./utilities/logger"));
var app = express_1.default();
var port = 3000;
// const myMiddleware = (req, res, next) => {
//   console.log()
// };
app.get('/players', logger_1.default, function (req, res) {
    res.send('PLAYERS!!');
});
app.get('/teams', logger_1.default, function (req, res) {
    res.send('TEAMS!!');
});
app.get('/groups', function (req, res) {
    res.send('GROUPS!!');
});
// start the Express server
app.listen(port, function () {
    console.log("server started at http://localhost:" + port);
});
