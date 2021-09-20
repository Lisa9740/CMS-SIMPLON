"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Viewer = void 0;
const fs = require('fs');
const ejs = require('ejs');
class Viewer {
    constructor(file, data = {}) {
        this.file = file;
        this.data = data;
    }
    static make(file, data = {}) {
        return new Viewer(file, data);
    }
    render() {
        const htmlContent = this.readFile(this.file);
        return ejs.render(htmlContent, { file: this.file, data: this.data });
    }
    readFile(file) {
        return fs.readFileSync('./src/server/views/' + file, 'utf8');
    }
}
exports.Viewer = Viewer;
//# sourceMappingURL=Viewer.js.map