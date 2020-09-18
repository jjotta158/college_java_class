import Employee from '../exercise_2/Employee'


export default class Worker extends Employee {
    productionValue:number
    commission:number

    constructor(name: string, alias: string, phone: string, baseSalary: number, fee: number, sectorCode: string, productionValue: number, commission:number) {
        super(name, alias, phone, sectorCode, baseSalary, fee)

        this.productionValue = productionValue
        this.commission = commission
    }


    public getProductionValue():number {
        return this.productionValue
    }

    public getCommission():number { 
        return this.commission
    }

    public setProductionValue(productionValue: number):void {
        this.productionValue = productionValue
    }

    public setCommission(commission: number):void {
        this.commission = commission
    }
}