import {Field} from "./Field";
import {AbstractModel} from "./Abstract";

export class Query {
    private field: Field[];
    private table: string;

    constructor(Model: AbstractModel) {
        this.table = Model.table
        this.field = Model.field
    }

    findAll(){
        return 'SELECT * FROM `' + this.table + '`'
    }

    findById(id){
        return 'SELECT * FROM `' + this.table + '` WHERE id = ' + id
    }

    where(param: any, value: any) {
        return ' WHERE ' + param + ' = ' + value
    }
}
