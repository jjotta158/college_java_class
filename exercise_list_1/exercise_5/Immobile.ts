export default class Immobile {
    alias:string
    price:number

    constructor(alias:string, price:number) {
        this.alias = alias
        this.price = price
    }

    public getAlias():string {
        return this.alias
    }

    public getPrice():number {
        return this.price
    }

    public setAlias(alias:string):void {
        this.alias = alias
    }

    public setPrice(price:number) {
        this.price = price
    }




}