import {Router} from "./core/router";
import {HomePageController} from "../controller/HomePageController";
import {ArticleController} from "../controller/ArticleController";
import {Viewer} from "../templating/Viewer";

export default class Routes{

    static build() {
        Router.get('/', HomePageController.get)

        Router.get('/api/articles', async () => {
            return await ArticleController.get()
        })

        Router.get('/404', function () {
            let view = Viewer.make('home.ejs', { title : "Page Non Trouvée"})
            return view;
        })

    }
}
