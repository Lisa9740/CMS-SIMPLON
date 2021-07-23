"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
class Query {
    static toSql(table, field) {
        return 'SELECT * FROM `' + table + '`';
    }
}
exports.Query = Query;
//# sourceMappingURL=Query.js.map