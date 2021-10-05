'use strict';
import {Router} from "../Routes/router";
import {HttpUtils} from "./http";
import {Request} from "./request";
import {Response} from "./response";
import {Route} from "../Routes/route";
import {IncomingMessage, ServerResponse} from "http";
require('dotenv').config()

export class Server {
    private static instance: Server;

    SERVER_ADDRESS:any = process.env.SERVER_ADDRESS;
    SERVER_PORT:any = process.env.PORT || 4000;

    private static getInstance(): Server {
        if (!this.instance) {
            this.instance = new Server();
        }
        return this.instance;
    }

    private startServer() {
        const http = HttpUtils.http()
        const server = http.createServer(async (request: IncomingMessage, response: ServerResponse) => {
            const req = await Request.instance(request)
            const res = Response.instance(response)
            const data = await  this.checkRoute(req)

            if (data) {
                console.log("checkroute", data)
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


    private async checkRoute(request) {
        let route: Route[] = Router.getAll().filter(function (element) {
            if (element.url === request.req.url && element.method === request.req.method) {
                return element
            }
            return;
        })

        if (route && route.length > 0) {
            const data = await route.pop().callback(request);

            console.log(typeof  data)
            return data;
        } else {
            return Router.find('/404').pop().callback()
        }
    }
}
