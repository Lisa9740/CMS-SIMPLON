import article from "../database/model/Article";

export class ArticleController{

    public static async get() {
        let data = await article.findAll()
        return data;
    }

    public static async getById() {
        let data = await article.findById('id', 1)
        return data;
    }

    public static post(request, response){

    }
}
