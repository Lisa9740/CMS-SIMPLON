import {Request} from "../../core/Server/request";
import {Viewer} from "../../core/Templating/Viewer";
import {Response} from "../../core/Server/response";
import article from "../database/model/Article";

export class HomePageController{
    public static get() {
        return Viewer.make('home.ejs', { title : "HomePage Title"});
    }
}
