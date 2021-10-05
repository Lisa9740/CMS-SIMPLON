import {IncomingMessage} from "http";
import {MethodEnum} from "../Utils/Enum/methodEnum";
const { parse } = require('querystring');
const url = require('url')


export class Request {
    public req: any;
    public method: string;
    public url: string;
    public data: any;


    constructor( req: any
    ) {
        this.req = req
        this.method = req.method
        this.url = req.url
        this.data = null
    }


    public async setData() {
        let body: any;
        switch (this.req.method) {
            case MethodEnum.GET:
                this.url = url.parse(this.req.url).pathname
                this.data = url.parse(this.req.url).query ? this.parseParams(url.parse(this.req.url).query) : {}
                break;
            case MethodEnum.POST:
                body = await this.parseBody(this.req)
                this.data =  {body}
                break;
            case MethodEnum.PATCH:
                this.data = await this.parseBody(this.req)
                break;
            case MethodEnum.PUT:
                this.data = await Promise.resolve(this.parseBody(this.req))
                break;
            case MethodEnum.DELETE:
                this.data = await Promise.resolve(this.parseBody(this.req))
                break;
            default:
                break;
        }
    }
    private async parseBody(req) {
        let body: Array<any> = []

        function parseUrlEncoded(parsedBody: string) {
            let dataSplited = parsedBody.split('&')
            let dataObject: any = {};
            dataSplited.forEach((data: any) => {
                let tab   = data.split('=');
                let key   = tab[0];
                let value = tab[1];
                dataObject[key]   = value
            })
            return dataObject;
        }

        return new Promise(function(resolve, reject) {
            req.on('data', (chunk:  any) => {
                body.push(chunk);
            }).on('end', () => {
                let headerType = req.headers['content-type'];
                const parsedBody = Buffer.concat(body).toString();
                if(headerType == "application/json") return resolve(JSON.parse(parsedBody))
                if(headerType == "application/x-www-form-urlencoded") return resolve(parseUrlEncoded(parsedBody))
                else return resolve(parsedBody)
            });
        })
    }

    parseParams(strParams: any) {
        return JSON.parse('{"' + strParams.replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
    }

    public static async instance(req: IncomingMessage){
        const request = new Request(req)
        await request.setData()
        return request

    }
}
