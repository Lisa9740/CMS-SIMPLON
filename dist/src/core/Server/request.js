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
exports.Request = void 0;
const methodEnum_1 = require("../Utils/Enum/methodEnum");
const { parse } = require('querystring');
const url = require('url');
class Request {
    constructor(req) {
        this.req = req;
        this.method = req.method;
        this.url = req.url;
    }
    parseBody(req) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(function (resolve, reject) {
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                });
                req.on('end', () => {
                    body = body ? parse(body) : body;
                    resolve(body ? body : {});
                });
            });
        });
    }
    parseParams(strParams) {
        return JSON.parse('{"' + strParams.replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    }
    setData(req) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (req.method) {
                case methodEnum_1.MethodEnum.GET:
                    this.url = url.parse(req.url).pathname;
                    this.data = url.parse(req.url).query ? this.parseParams(url.parse(req.url).query) : {};
                    break;
                case methodEnum_1.MethodEnum.POST:
                    this.data = yield Promise.resolve(this.parseBody(req));
                    break;
                case methodEnum_1.MethodEnum.PATCH:
                    this.data = yield Promise.resolve(this.parseBody(req));
                    break;
                case methodEnum_1.MethodEnum.PUT:
                    this.data = yield Promise.resolve(this.parseBody(req));
                    break;
                case methodEnum_1.MethodEnum.DELETE:
                    this.data = yield Promise.resolve(this.parseBody(req));
                    break;
                default:
                    break;
            }
        });
    }
    static instance(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = new Request(req);
            if (request) {
                yield request.setData(req);
                return request;
            }
        });
    }
}
exports.Request = Request;
//# sourceMappingURL=request.js.map