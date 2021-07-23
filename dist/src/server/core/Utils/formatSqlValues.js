"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatSqlValues = void 0;
class FormatSqlValues {
    formatFields(arr, output) {
        let str = "";
        arr.forEach((e, index) => {
            output.push(e.field);
            if (arr.length - 1 !== index) {
                return str = str + e.field + ", ";
            }
            return str = str + e.field;
        });
        return str;
    }
    formatValues(arr) {
        let str = "";
        arr.forEach((value, index) => {
            if (arr.length - 1 !== index) {
                if (typeof value === "number") {
                    str = str + value + ', ';
                }
                else {
                    str = str + "'" + value + "', ";
                }
            }
            else {
                if (typeof value === "number") {
                    str = str + value;
                }
                else {
                    str = str + "'" + value + "'";
                }
            }
        });
        return str;
    }
}
exports.FormatSqlValues = FormatSqlValues;
//# sourceMappingURL=formatSqlValues.js.map