import article from "../database/model/Article";
import {Request} from "../../core/Server/request";

export class ArticleController{

    public static async get() {
        return await article.findAll();
    }

    public static async getById() {
        return await article.findById(1);
    }

    public static async create(request: any) {

        try {
            return await article.create(request.data.body)
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
