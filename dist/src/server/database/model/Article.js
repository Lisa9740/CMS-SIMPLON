"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Abstract_1 = require("../../core/Model/Abstract");
const fieldTypeEnum_1 = require("../../core/Utils/fieldTypeEnum");
const Query_1 = require("../../core/Model/Query");
const table = 'article';
const fields = [
    { field: 'id', type: fieldTypeEnum_1.FieldTypeEnum.integer },
    { field: "title", type: fieldTypeEnum_1.FieldTypeEnum.string },
    { field: "content", type: fieldTypeEnum_1.FieldTypeEnum.string }
];
class Article extends Abstract_1.AbstractModel {
}
const article = new Article(table, fields, new Query_1.Query());
exports.default = article;
//# sourceMappingURL=Article.js.map