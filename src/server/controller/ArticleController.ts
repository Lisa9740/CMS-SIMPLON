import article from "../database/model/Article";

export class ArticleController{

    public static async get() {
        let data = await article.findAll()
        return data;
    }

    public static post(request, response){

    }
}
