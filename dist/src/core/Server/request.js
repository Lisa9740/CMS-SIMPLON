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
        this.data = null;
    }
    setData() {
        return __awaiter(this, void 0, void 0, function* () {
            let body;
            switch (this.req.method) {
                case methodEnum_1.MethodEnum.GET:
                    this.url = url.parse(this.req.url).pathname;
                    this.data = url.parse(this.req.url).query ? this.parseParams(url.parse(this.req.url).query) : {};
                    break;
                case methodEnum_1.MethodEnum.POST:
                    body = yield this.parseBody(this.req);
                    this.data = { body };
                    break;
                case methodEnum_1.MethodEnum.PATCH:
                    this.data = yield this.parseBody(this.req);
                    break;
                case methodEnum_1.MethodEnum.PUT:
                    this.data = yield Promise.resolve(this.parseBody(this.req));
                    break;
                case methodEnum_1.MethodEnum.DELETE:
                    this.data = yield Promise.resolve(this.parseBody(this.req));
                    break;
                default:
                    break;
            }
        });
    }
    parseBody(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let body = [];
            function parseUrlEncoded(parsedBody) {
                let dataSplited = parsedBody.split('&');
                let dataObject = {};
                dataSplited.forEach((data) => {
                    let tab = data.split('=');
                    let key = tab[0];
                    let value = tab[1];
                    dataObject[key] = value;
                });
                return dataObject;
            }
            return new Promise(function (resolve, reject) {
                req.on('data', (chunk) => {
                    body.push(chunk);
                }).on('end', () => {
                    let headerType = req.headers['content-type'];
                    const parsedBody = Buffer.concat(body).toString();
                    if (headerType == "application/json")
                        return resolve(JSON.parse(parsedBody));
                    if (headerType == "application/x-www-form-urlencoded")
                        return resolve(parseUrlEncoded(parsedBody));
                    else
                        return resolve(parsedBody);
                });
            });
        });
    }
    parseParams(strParams) {
        return JSON.parse('{"' + strParams.replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    }
    static instance(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = new Request(req);
            yield request.setData();
            return request;
        });
    }
}
exports.Request = Request;
//# sourceMappingURL=request.js.map