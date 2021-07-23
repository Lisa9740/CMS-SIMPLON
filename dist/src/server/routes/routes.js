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
const router_1 = require("./core/router");
const HomePageController_1 = require("../controller/HomePageController");
const ArticleController_1 = require("../controller/ArticleController");
const Viewer_1 = require("../templating/Viewer");
class Routes {
    static build() {
        router_1.Router.get('/', HomePageController_1.HomePageController.get);
        router_1.Router.get('/api/articles', () => __awaiter(this, void 0, void 0, function* () {
            return yield ArticleController_1.ArticleController.get();
        }));
        router_1.Router.get('/404', function () {
            let view = Viewer_1.Viewer.make('home.ejs', { title: "Page Non Trouvée" });
            return view;
        });
    }
}
exports.default = Routes;
//# sourceMappingURL=routes.js.map