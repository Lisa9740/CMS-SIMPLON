"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractModel = void 0;
const database_1 = require("../database");
class AbstractModel {
    constructor(table, fields) {
        this.table = table;
        this.fields = fields;
    }
    findAll() {
        database_1.Database.query('SELECT * FROM `' + this.table + '`').then(data => {
            console.log(data);
            return data;
        });
    }
}
exports.AbstractModel = AbstractModel;
//# sourceMappingURL=Abstract.js.map