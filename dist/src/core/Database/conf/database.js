"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mysql = require('mysql2');
require('dotenv').config();
class Database {
    static connect() {
        return mysql.createConnection({
            host: process.env.HOST_MACHINE_MYSQL_HOST || "localhost",
            port: process.env.HOST_MACHINE_MYSQL_PORT,
            user: process.env.MYSQL_USER,
            database: process.env.MYSQL_DATABASE,
            password: process.env.MYSQL_PASSWORD
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