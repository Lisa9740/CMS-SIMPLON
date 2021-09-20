'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const router_1 = require("../Routes/router");
const http_1 = require("./http");
const request_1 = require("./request");
const response_1 = require("./response");
require('dotenv').config();
class Server {
    constructor() {
        this.SERVER_ADDRESS = process.env.SERVER_ADDRESS || '0.0.0.0';
        this.SERVER_PORT = process.env.PORT || 3000;
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Server();
        }
        return this.instance;
    }
    startServer() {
        const http = http_1.HttpUtils.http();
        const server = http.createServer((request, response) => __awaiter(this, void 0, void 0, function* () {
            const req = yield request_1.Request.instance(request);
            const res = new response_1.Response(response);
            const data = this.checkRoute(req);
            console.log(data);
            if (data) {
                res.emit(data);
            }
        }));
        server.listen(this.SERVER_PORT, this.SERVER_ADDRESS, () => {
            console.log(`🚀🚀Server is running on http://127.0.0.1:${this.SERVER_PORT}🚀🚀`);
        });
    }
    static start() {
        this.getInstance().startServer();
    }
    checkRoute(request) {
        let route = router_1.Router.getAll().filter(function (element) {
            if (element.url === request.req.url && element.method === request.req.method) {
                return element;
            }
            return;
        });
        if (request.req.body) {
            console.log(request.req.body);
        }
        if (route && route.length > 0) {
            return route.pop().callback();
        }
        else {
            return router_1.Router.find('/404').pop().callback();
        }
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map