import {Query} from "./Query";
import {Field} from "./Field";
import {Database} from "../Database/conf/database";

export abstract class AbstractModel{
    fields: Field[];
    table: string;
    query: Query

    constructor(table: string, fields: Field[], query: Query)
    {
        this.table = table
        this.fields = fields
        this.query = query

    }

    async findAll(){
        let datas : {}
        try {
            datas = await Database.query(this.query.select(this.table, this.fields))
            return datas
        } catch (e){
            console.log(e)
        }
    }

    async findById(id, value){
        let datas : {}
        try {
            datas = await Database.query(this.query.select(this.table, this.fields, id, value, true))
            return datas
        } catch (e) {
            console.log(e)
        }
    }
}
