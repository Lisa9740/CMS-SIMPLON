'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const router_1 = require("./src/server/core/Routes/router");
const http_1 = require("./src/server/core/Server/http");
const request_1 = require("./src/server/core/Server/request");
const response_1 = require("./src/server/core/Server/response");
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
        const server = http.createServer((request, response) => {
            const req = new request_1.Request(request);
            const res = new response_1.Response(response);
            const data = this.checkRoute(req);
            if (data) {
                res.emit(data);
            }
        });
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