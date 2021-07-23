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

    async create(data){
        try {
            return await Database.query(this.query.insert(data))
        }catch (e){
            console.log(e)
        }
    }

    async update(data){
        try {
            const column = data.column
            const filterColumn = data.filterColumn
            const newData = data.newData
            const searchData = data.searchData

            return await  Database.query(this.query.update(column, filterColumn, newData, searchData))
        }catch (e) {
            console.log(e)
        }
    }

    async delete(id){
        try {
            return await Database.query(this.query.delete(id))
        }catch (e) {
            console.log(e)
        }
    }
}
