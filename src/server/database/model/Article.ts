import {ModelInterface} from "../../core/Model/interface/ModelInterface";
import {AbstractModel} from "../../core/Model/Abstract";
import {FieldTypeEnum} from "../../core/Utils/Enum/fieldTypeEnum";
import {Field} from "../../core/Model/Field";


class Article extends AbstractModel implements ModelInterface {
    fields: Field[];
}

const table = 'article'
const fields = [
    { field : 'id', type: FieldTypeEnum.integer },
    { field: "title", type: FieldTypeEnum.string },
    { field: "content", type: FieldTypeEnum.string },
    { field: "author", type: FieldTypeEnum.string}
]

const article = new Article(table, fields);

export default article;
