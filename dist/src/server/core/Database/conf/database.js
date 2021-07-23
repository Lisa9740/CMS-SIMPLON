"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mysql = require('mysql2');
class Database {
    static connect() {
        return mysql.createConnection({
            host: 'cms-db',
            port: '3306',
            user: 'root',
            database: 'cms_simplon',
            password: 'root'
        });
    }
    static query(sqlQuery) {
        let db = this.connect();
        return new Promise((resolve, reject) => {
            db.query(sqlQuery, function (err, results, fields) {
                if (err) {
                    reject(err);
                }
                resolve(results);
            });
        });
    }
}
exports.Database = Database;
//# sourceMappingURL=database.js.map