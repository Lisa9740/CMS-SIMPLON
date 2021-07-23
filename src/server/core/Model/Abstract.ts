import {Query} from "./Query";
import {Database} from "../Database/conf/database";
import {Field} from "./Field";

export abstract class AbstractModel{
    query: Query
    table: string;
    field: Field[];

    constructor(table: string, field: Field[])
    {
        this.table = table
        this.field = field
        this.query = new Query(this)

    }

    async findAll(){
        let datas : {}
        try {
            datas = await Database.query(this.query.findAll())
            return datas
        } catch (e){
            console.log(e)
        }
    }

    async findById(id){
        let datas : {}
        try {
            datas = await Database.query(this.query.findById(id))
            return datas
        } catch (e) {
            console.log(e)
        }
    }
}
