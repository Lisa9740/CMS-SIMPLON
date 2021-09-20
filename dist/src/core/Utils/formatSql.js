"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatSql = void 0;
class FormatSql {
    fields(arr) {
        let str = "";
        arr.forEach((e, index) => {
            if (arr.length - 1 !== index) {
                return str = str + e.field + ", ";
            }
            return str = str + e.field;
        });
        return str;
    }
    values(data) {
        let str = "";
        console.log(data);
        if (Array.isArray(data)) {
            data.forEach((value, index) => {
                if (data.length - 1 !== index) {
                    (typeof value === "number") ? str = str + value + ', ' : str = str + "'" + value + "', ";
                }
                else {
                    (typeof value === "number") ? str = str + value : str = str + "'" + value + "'";
                }
            });
        }
        else if (typeof data === "object") {
            str = "'" + data + "'";
        }
        return str;
    }
}
exports.FormatSql = FormatSql;
//# sourceMappingURL=formatSql.js.map