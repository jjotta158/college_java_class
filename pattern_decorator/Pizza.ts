export default class Pizza {
    
    private description:string;

    constructor() {}

    public setDescription(desc:string):void {
        this.description = desc;
    }

    public getDescription():string {
        return this.description;
    }
}