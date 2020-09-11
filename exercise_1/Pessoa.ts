export default class Person {
    name:string
    alias:string
    phone:string

    public constructor(name:string, alias:string, phone:string) {
        this.name = name
        this.alias = alias
        this.phone = phone
    }

    public setName(name:string):void {
        this.name = name
    }

    public setAlias(alias:string):void {
        this.alias = alias
    }

    public setPhone(phone:string):void {
        this.phone = phone
    }

    public  getName():string {
        return this.name
    }

    public getAlias():string {
        return this.alias
    }

    public getPhone():string {
        return this.phone
    }

}