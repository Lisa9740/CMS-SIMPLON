"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePageController = void 0;
const Viewer_1 = require("../../core/Templating/Viewer");
class HomePageController {
    static get() {
        return Viewer_1.Viewer.make('home.ejs', { title: "HomePage Title" });
    }
}
exports.HomePageController = HomePageController;
//# sourceMappingURL=HomePageController.js.map