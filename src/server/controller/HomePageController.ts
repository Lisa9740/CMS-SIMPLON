import {Request} from "../adapter/request";
import {Viewer} from "../templating/Viewer";
import {Response} from "../adapter/response";
import article from "../database/model/Article";

export class HomePageController{
    public static get() {
        return Viewer.make('home.ejs', { title : "HomePage Title"});
    }
}
