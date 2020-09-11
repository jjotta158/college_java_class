import Immobile from '../Immobile'

export default class Newest extends Immobile {
    haveConditioningAir:boolean
    isAutomated:boolean

    constructor(alias:string, price:number, haveConditioningAir:boolean, isAutomated:boolean) {
        super (alias, price)
        this.haveConditioningAir = haveConditioningAir
        this.isAutomated = isAutomated
    }

    public getIsAutomated():boolean {
        return this.isAutomated
    }

    public getHaveConditioningAir():boolean {
        return this.haveConditioningAir
    }

    public setIsAutomated(isAutomated:boolean){
        this.isAutomated = isAutomated
    }

    public setHaveConditioningAir(haveConditioningAir:boolean) :void {
        this.haveConditioningAir = haveConditioningAir
    }
}