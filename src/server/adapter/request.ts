import {IncomingMessage} from "http";

export class Request {
    private req: IncomingMessage;

    constructor( req: IncomingMessage
    ) {
        this.req = req
    }
}
