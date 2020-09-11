import Person from '../exercise_1/Pessoa'

export default class Employee extends Person {
    sectorCode:string
    baseSalary:number
    fee:number

    constructor(name:string, alias:string, phone:string, sectorCode:string, baseSalary:number, fee:number) {
        super(name,alias,phone)

        this.sectorCode = sectorCode
        this.baseSalary = baseSalary
        this.fee = fee
    }

    public getSectorCode():string {
        return this.sectorCode
    }

    public getBaseSalary():number {
        return this.baseSalary
    }

    public getFee():number {
        return this.fee
    }

    public setSectorCode(sectorCode:string):void {
        this.sectorCode = sectorCode
    }

    public setBaseSalary(baseSalary:number):void {
        this.baseSalary = baseSalary
    }

    public setFee(fee:number):void {
        this.fee = fee
    }

    public getNetSalary(baseSalary: number = this.getBaseSalary(), fee: number = this.getFee()):number {
        return this.calculateNetSalary(baseSalary, fee)
    }


    private calculateNetSalary(baseSalary:number, fee:number):number {
        return baseSalary - (baseSalary / fee)
    }
}