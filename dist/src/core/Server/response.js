"use strict";
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
exports.Response = void 0;
const Viewer_1 = require("../Templating/Viewer");
const router_1 = require("../Routes/router");
class Response {
    constructor(res) {
        this.res = res;
    }
    setHeader(d) {
        if (!Array.isArray(d) && d instanceof Viewer_1.Viewer) {
            this.res.writeHead(200, { 'Content-Type': 'text/html' });
            return d.render();
        }
        else {
            this.res.writeHead(200, { 'Content-Type': 'application/json' });
            return JSON.stringify(d);
        }
    }
    emit(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const d = yield Promise.resolve(data);
            try {
                return this.res.end(this.setHeader(d));
            }
            catch (e) {
                this.res.statusCode = 404;
                return this.res.end(router_1.Router.find('/404').pop().callback());
            }
        });
    }
    static instance(req) {
        return new Response(req);
    }
}
exports.Response = Response;
//# sourceMappingURL=response.js.map