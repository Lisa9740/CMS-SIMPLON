import {FieldInterface} from "./interface/FieldInterface";

export class Field implements FieldInterface{
    constructor(
        public field: string,
        public type: string
    ) {}
}
