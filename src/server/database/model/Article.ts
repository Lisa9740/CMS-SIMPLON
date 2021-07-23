import {ModelInterface} from "./core/interface/ModelInterface";
import {AbstractModel} from "./core/Abstract";
import {FieldTypeEnum} from "../../utils/fieldTypeEnum";
import {Query} from "./core/Query";
import {Field} from "./core/Field";

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

const article = new Article(table, fields);

export default article;
