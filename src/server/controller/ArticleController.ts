import article from "../database/model/Article";

export class ArticleController{

    public static async get() {
        return await article.findAll();
    }

    public static async getById() {
        return await article.findById(1);
    }

    public static async create() {
        let data = {
            id : 3,
            title: 'Je suis un article',
            content: 'test test content',
            author: 'Alison'
        }

        try {
            return await article.create(data)
        }catch (e) {
            console.log(e)
        }
    }

    public static async update(){

        const data = {
            column : 'content',
            filterColumn : 'id',
            newData: 'new new',
            searchData: 2
        }

        try {
            return await article.update(data)
        }catch (e) {
            console.log(e)
        }
    }

    public static async delete(){
        try {
            return await article.delete(1)

        }catch (e) {
            console.log(e)
        }
    }
}
