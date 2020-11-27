export default abstract class Pizza {
    
    protected description:string;

    constructor() {}

    public setDescription(desc:string):void {
        this.description = desc;
    }

    public getDescription():string {
        return this.description;
    }

    public abstract cost():number;
}