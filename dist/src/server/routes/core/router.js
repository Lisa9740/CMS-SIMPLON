"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const route_1 = require("./route");
const methodEnum_1 = require("../../utils/methodEnum");
class Router {
    constructor() {
        this.routes = [];
    }
    add(method, url, callback) {
        this.routes.push(new route_1.Route(url, method, callback));
    }
    static get(url, callback) {
        const instance = this.getInstance();
        instance.add(methodEnum_1.MethodEnum.GET, url, callback);
    }
    static post(url, callback) {
        const instance = this.getInstance();
        instance.add(methodEnum_1.MethodEnum.POST, url, callback);
    }
    static push(url, callback) {
        const instance = this.getInstance();
        instance.add(methodEnum_1.MethodEnum.PUSH, url, callback);
    }
    delete(url, callback) {
        return this.routes.push(new route_1.Route(url, methodEnum_1.MethodEnum.DELETE, callback));
    }
    static getAll() {
        return this.getInstance().routes;
    }
    static find(url) {
        let data = this.getAll().filter(function (element) {
            return element.url === url;
        });
        if (data[0]) {
            return data;
        }
    }
    static getInstance() {
        if (!Router.instance) {
            Router.instance = new Router();
        }
        return Router.instance;
    }
}
exports.Router = Router;
//# sourceMappingURL=router.js.map