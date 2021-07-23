"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
class Query {
    constructor(Model) {
        this.table = Model.table;
        this.field = Model.field;
    }
    findAll() {
        return 'SELECT * FROM `' + this.table + '`';
    }
    findById(id) {
        return 'SELECT * FROM `' + this.table + '` WHERE id = ' + id;
    }
    where(param, value) {
        return ' WHERE ' + param + ' = ' + value;
    }
}
exports.Query = Query;
//# sourceMappingURL=Query.js.map