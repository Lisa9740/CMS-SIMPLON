import {ServerResponse} from 'http';
import {Viewer} from "../Templating/Viewer";
import {Router} from "../Routes/router";

export class Response{
    public res: ServerResponse

    constructor(res: ServerResponse) {
        this.res = res
    }

     setHeader(d){
        if (!Array.isArray(d) && d instanceof Viewer) {
            this.res.writeHead(200, {'Content-Type': 'text/html'});
            return d.render()
        }else {
            this.res.writeHead(200, {'Content-Type': 'application/json'})
            return JSON.stringify(d)
        }
    }

    async emit(data){
        console.log("data", data)
        const d:any =  await data
        console.log("d", data)
        try{
            return  this.res.end(this.setHeader(d));
        }catch (e){
            this.res.statusCode = 404
            return this.res.end(Router.find('/404').pop().callback())
        }
    }

    public static instance(req: ServerResponse){
        return new Response(req)
    }
}
