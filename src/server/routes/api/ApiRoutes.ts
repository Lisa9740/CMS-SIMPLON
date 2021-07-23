import {Router} from "../../core/Routes/router";
import {ArticleController} from "../../controller/ArticleController";

export default class ApiRoutes{

    static buildApi() {
        Router.get('/api/articles', async () => {
            return await ArticleController.get()
        })
        Router.get('/api/article', async () => {
            return await ArticleController.getById()
        })
    }
}
