import {ModelInterface} from "../../core/Model/interface/ModelInterface";
import {AbstractModel} from "../../core/Model/Abstract";
import {FieldTypeEnum} from "../../core/Utils/fieldTypeEnum";
import {Query} from "../../core/Model/Query";
import {Field} from "../../core/Model/Field";

const table = 'article'
const fields = [
    { field : 'id', type: FieldTypeEnum.integer },
    { field: "title", type: FieldTypeEnum.string },
    { field: "content", type: FieldTypeEnum.string }
]

class Article extends AbstractModel implements ModelInterface {
    fields: Field[];
    table: string;
}

const article = new Article(table, fields, new Query());

export default article;
