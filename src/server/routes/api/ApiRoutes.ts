import {Router} from "../../core/Routes/router";
import {ArticleController} from "../../controller/ArticleController";
import {Request} from "../../core/Server/request";

export default class ApiRoutes{

    static buildApi() {
        Router.get('/api/articles', async () => {
            return await ArticleController.get()
        })
        Router.get('/api/article/1', async () => {
            return await ArticleController.getById()
        })

        Router.post('/api/article/create', async () =>{
            return await  ArticleController.create()
        })

        Router.post('/api/article/update', async () =>{
            return await  ArticleController.update()
        })

        Router.post('/api/article/delete', async () =>{
            return await  ArticleController.delete()
        })
    }
}
