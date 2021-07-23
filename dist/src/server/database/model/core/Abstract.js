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
exports.AbstractModel = void 0;
const Query_1 = require("./Query");
const database_1 = require("../../database");
class AbstractModel {
    constructor(table, fields) {
        this.table = table;
        this.fields = fields;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let datas;
            try {
                datas = yield database_1.Database.query(Query_1.Query.toSql(this.table, this.fields));
                return datas;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    findById() {
        return __awaiter(this, void 0, void 0, function* () {
            let datas;
        });
    }
}
exports.AbstractModel = AbstractModel;
//# sourceMappingURL=Abstract.js.map