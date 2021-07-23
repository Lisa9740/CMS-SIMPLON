import {Router} from "../core/Routes/router";
import {HomePageController} from "../controller/HomePageController";
import {ArticleController} from "../controller/ArticleController";
import {Viewer} from "../core/Templating/Viewer";
import {Request} from "../core/Server/request";


export default class Routes{

    static build() {
        Router.get('/', HomePageController.get)

        Router.get('/404', function () {
            let view = Viewer.make('error.ejs', { error : "Page Non Trouvée"})
            return view;
        })

    }
}
