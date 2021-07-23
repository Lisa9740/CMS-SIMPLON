"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = __importDefault(require("./src/server/routes/routes"));
const server_1 = require("./server");
routes_1.default.build();
server_1.Server.start();
//article.query.findById(1).then(data => console.log(data))
//# sourceMappingURL=app.js.map