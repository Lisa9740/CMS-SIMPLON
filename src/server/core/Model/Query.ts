export class Query {

    select(table, field, param = null, value = null, hasCondition = false){
            if (hasCondition){
                return 'SELECT * FROM `' + table + '` ' + this.where(param, value)
            }
            return 'SELECT * FROM `' + table + '`'
        }


         where(param: any, value: any) {
            return 'WHERE ' + param + ' = ' + value
        }


}
