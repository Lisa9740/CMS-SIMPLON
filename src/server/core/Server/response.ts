import {ServerResponse} from 'http';
import {Viewer} from "../Templating/Viewer";

export class Response{
    public res: ServerResponse

    constructor(res : ServerResponse) {
        this.res = res
    }

    async emit(data){
        const d:any =  await Promise.resolve(data)
        console.log(typeof data)
        if (!Array.isArray(d) && d instanceof Viewer){
            this.res.writeHead(200,{'Content-Type' :'text/html'})
           return  this.res.end(d.render())
        }else{
            this.res.writeHead(200, {'Content-Type': 'application/json'})
            return this.res.end(JSON.stringify(d))
        }
    }

    // emit(data){
    //     console.log(this.setHeader(data))
    // }

}
