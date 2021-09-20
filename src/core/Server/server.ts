'use strict';
import {Router} from "../Routes/router";
import {HttpUtils} from "./http";
import {Request} from "./request";
import {Response} from "./response";
import {Route} from "../Routes/route";
require('dotenv').config()

export class Server {
    private static instance: Server;

    SERVER_ADDRESS:any = process.env.SERVER_ADDRESS || '0.0.0.0';
    SERVER_PORT:any = process.env.PORT || 3000;

    private static getInstance(): Server {
        if (!this.instance) {
            this.instance = new Server();
        }
        return this.instance;
    }

    private startServer() {
        const http = HttpUtils.http()
        const server = http.createServer(async (request: any, response: any) => {
            const req = await Request.instance(request)
            const res = Response.instance(response)
            const data = this.checkRoute(req)

            if (data) {
                 return res.emit(data)
            }
        });

        server.listen(this.SERVER_PORT, this.SERVER_ADDRESS, () => {
            console.log(`🚀🚀Server is running on http://127.0.0.1:${this.SERVER_PORT}🚀🚀`);
        });
    }

    public static start(){
        this.getInstance().startServer()
    }


    private checkRoute(request) {
        let route: Route[] = Router.getAll().filter(function(element) {
            if(element.url === request.req.url && element.method === request.req.method){
                return element
            }
            return;
        })

        if(request.req.body){
            console.log("checkRoute : request.body " + request.req.body)
        }

        if (route && route.length > 0){
            return route.pop().callback();
        }else{
           return Router.find('/404').pop().callback()
        }
    }
}
