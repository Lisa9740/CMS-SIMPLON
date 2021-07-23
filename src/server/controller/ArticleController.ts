import article from "../database/model/Article";

export class ArticleController{

    public static async get() {
        return await article.findAll();
    }

    public static async getById() {
        return await article.findById(1);
    }

}
