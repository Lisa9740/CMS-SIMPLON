"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
const SqlFormat_1 = require("../Utils/SqlFormat");
const verifyArray_1 = require("../Utils/verifyArray");
class Query {
    constructor(Model) {
        this.table = Model.table;
        this.field = Model.field;
        this.format = new SqlFormat_1.SqlFormat();
    }
    findAll() {
        try {
            return 'SELECT * FROM `' + this.table + '`';
        }
        catch (e) {
            throw new Error(e);
        }
    }
    findById(id) {
        try {
            return 'SELECT' + this.field + ' FROM `' + this.table + '` WHERE id = ' + id;
        }
        catch (e) {
            throw new Error(e);
        }
    }
    insert(data) {
        let verifyArray = new verifyArray_1.VerifyArray();
        let fields = [];
        if (verifyArray.isSame(Object.keys(data), this.sqlTableField(fields))) {
            return 'INSERT INTO ' + this.table + '(' + this.sqlDataField(this.field) + ') VALUES (' + this.sqlDataValue(data) + ')';
        }
        else {
            throw new Error('Une erreur est survenue');
        }
    }
    update(column, filterColumn, newData, searchedData) {
        try {
            console.log(typeof newData);
            let sqlSet = " SET " + column;
            typeof newData === "string" ? sqlSet = sqlSet + " = '" + newData + "'" : sqlSet + " = " + newData;
            return "UPDATE " + this.table + sqlSet + " WHERE " + filterColumn + " = " + searchedData;
        }
        catch (e) {
            console.log(e);
        }
    }
    delete(id) {
        try {
            return "DELETE FROM " + this.table + " WHERE id = " + id;
        }
        catch (e) {
            console.log(e);
        }
    }
    // format data values for
    sqlDataValue(data) {
        try {
            return this.format.values(Object.values(data));
        }
        catch (e) {
            console.log(e);
        }
    }
    sqlDataField(data) {
        return this.format.fields(data);
    }
    sqlTableField(arr) {
        this.field.forEach(e => {
            arr.push(e.field);
        });
        return arr;
    }
}
exports.Query = Query;
//# sourceMappingURL=Query.js.map