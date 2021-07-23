"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../core/Routes/router");
const HomePageController_1 = require("../controller/HomePageController");
const Viewer_1 = require("../core/Templating/Viewer");
class Routes {
    static build() {
        router_1.Router.get('/', HomePageController_1.HomePageController.get);
        router_1.Router.get('/404', function () {
            let view = Viewer_1.Viewer.make('home.ejs', { title: "Page Non Trouvée" });
            return view;
        });
    }
}
exports.default = Routes;
//# sourceMappingURL=routes.js.map