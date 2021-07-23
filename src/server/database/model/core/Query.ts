import {Database} from "../../database";
import {Field} from "./Field";


export class Query {

   static toSql(table, field){
       return 'SELECT * FROM `' + table + '`'
    }

}
