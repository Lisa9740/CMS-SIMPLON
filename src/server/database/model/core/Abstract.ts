import {Query} from "./Query";
import {Field} from "./Field";
import {Database} from "../../database";

export abstract class AbstractModel{

    // query: Query
    //
    // constructor(query: Query)
    // {
    //     this.query = query
    // }

    fields: Field[];
    table: string;

    constructor(table: string,  fields : Field[])
    {
        this.table = table
        this.fields = fields
    }

    async findAll(){
        let datas : {}
        try {
            datas = await Database.query(Query.toSql(this.table, this.fields))
            return datas
        } catch (e){
            console.log(e)
        }
    }

    async findById(){
        let datas : {}

    }
}
