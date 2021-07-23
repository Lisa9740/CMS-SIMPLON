import {Route} from "./route";
import {MethodEnum} from "../Utils/Enum/methodEnum";

export class Router {
    private static instance: Router;

    private routes: Route[] = [];

    public add(method, url, callback){
        this.routes.push(new Route(url, method, callback));
    }

    public static get(url, callback){
        const instance = this.getInstance()
        instance.add(MethodEnum.GET, url, callback)
    }

    public static post(url, callback){
        const instance = this.getInstance()
        instance.add(MethodEnum.POST,url, callback);
    }

    public static push(url, callback){
        const instance = this.getInstance()
        instance.add(MethodEnum.PUSH, url, callback);
    }

    public static delete(url, callback){
        const instance = this.getInstance()
        instance.add(MethodEnum.DELETE, url, callback)
    }

    public static getAll():Route[]{
        return this.getInstance().routes
    }

    public static find(url){
        let data = this.getAll().filter(function(element) {
            return element.url === url;
        })
        if (data[0]){
            return data
        }
    }

    private static getInstance(): Router {
        if (!Router.instance) {
            Router.instance = new Router();
        }
        return Router.instance;
    }


}
