const fs = require('fs');
const ejs = require('ejs');

export class Viewer {
    public data: any;
    public file: string;

    constructor(file: string, data: any = {}) {
        this.file = file
        this.data = data
    }

    public static make(file: string, data: object = {}) {
        return new Viewer(file, data)
    }


    public render() {
        const htmlContent = this.readFile(this.file)
        return ejs.render(htmlContent, { file : this.file, data : this.data})
    }

    public readFile(file: string){
        return fs.readFileSync( './src/server/views/' + file, 'utf8');
    }
}
