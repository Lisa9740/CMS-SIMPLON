"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
class Query {
    select(table, field, param = null, value = null, hasCondition = false) {
        if (hasCondition) {
            return 'SELECT * FROM `' + table + '` ' + this.where(param, value);
        }
        return 'SELECT * FROM `' + table + '`';
    }
    where(param, value) {
        return 'WHERE ' + param + ' = ' + value;
    }
}
exports.Query = Query;
//# sourceMappingURL=Query.js.map