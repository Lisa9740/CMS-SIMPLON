import {FieldInterface} from "./interface/fieldInterface";

export class Field implements FieldInterface{
    constructor(
        public field: string,
        public type: string
    ) {}
}
