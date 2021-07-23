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
const router_1 = require("../../core/Routes/router");
const ArticleController_1 = require("../../controller/ArticleController");
class ApiRoutes {
    static buildApi() {
        router_1.Router.get('/api/articles', () => __awaiter(this, void 0, void 0, function* () {
            return yield ArticleController_1.ArticleController.get();
        }));
        router_1.Router.get('/api/article/1', () => __awaiter(this, void 0, void 0, function* () {
            return yield ArticleController_1.ArticleController.getById();
        }));
        router_1.Router.post('/api/article/create', () => __awaiter(this, void 0, void 0, function* () {
            return yield ArticleController_1.ArticleController.create();
        }));
        router_1.Router.post('/api/article/update', () => __awaiter(this, void 0, void 0, function* () {
            return yield ArticleController_1.ArticleController.update();
        }));
        router_1.Router.post('/api/article/delete', () => __awaiter(this, void 0, void 0, function* () {
            return yield ArticleController_1.ArticleController.delete();
        }));
    }
}
exports.default = ApiRoutes;
//# sourceMappingURL=ApiRoutes.js.map