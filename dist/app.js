"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = __importDefault(require("./src/server/routes/routes"));
const server_1 = require("./src/core/Server/server");
const ApiRoutes_1 = __importDefault(require("./src/server/routes/api/ApiRoutes"));
routes_1.default.build();
ApiRoutes_1.default.buildApi();
server_1.Server.start();
//# sourceMappingURL=app.js.map