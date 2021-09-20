import {IncomingMessage} from "http";
import {MethodEnum} from "../Utils/Enum/methodEnum";
const { parse } = require('querystring');
const url = require('url')

export class Request {
    public req: IncomingMessage;
    public method: string;
    public url: string;
    public data: any;


    constructor( req: IncomingMessage
    ) {
        this.req = req
        this.method = req.method
        this.url = req.url
    }

    async parseBody(req:IncomingMessage) {
        return new Promise(function(resolve, reject) {
            let body:string = ''
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                body = body ? parse(body) : body;
                resolve(body ? body : {})
            });
        })
    }

    parseParams(strParams: string) {
        return JSON.parse('{"' + strParams.replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
    }

    async setData(req: IncomingMessage) {
        switch (req.method) {
            case MethodEnum.GET:
                this.url = url.parse(req.url).pathname
                this.data = url.parse(req.url).query ? this.parseParams(url.parse(req.url).query) : {}
                break;
            case MethodEnum.POST:
                this.data = await Promise.resolve(this.parseBody(req))
                break;
            case MethodEnum.PATCH:
                this.data = await Promise.resolve(this.parseBody(req))
                break;
            case MethodEnum.PUT:
                this.data = await Promise.resolve(this.parseBody(req))
                break;
            case MethodEnum.DELETE:
                this.data = await Promise.resolve(this.parseBody(req))
                break;
            default:
                break;
        }
    }

    public static async instance(req: IncomingMessage){
        const request = new Request(req)

        await request.setData(req)
        return request

    }
}
