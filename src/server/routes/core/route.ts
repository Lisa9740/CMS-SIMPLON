import {RouteInterface} from "./routeInterface";

export class Route implements RouteInterface{

    constructor(
        public url: string,
        public method: string,
        public callback: any
    ) {}

}
