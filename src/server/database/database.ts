const mysql = require('mysql2');

export class Database{
    private static connect(){
        return  mysql.createConnection({
            host: 'cms-db',
            port: '3306',
            user: 'root',
            database: 'cms_simplon',
            password: 'root'
        });
    }


    static query(sqlQuery){
        let db = this.connect();

        return new Promise((resolve, reject) => {
            db.query(sqlQuery, function (err, results, fields) {
                if (err) {
                    reject(err)
                }
                resolve(results);
            })
        })
    }


}
