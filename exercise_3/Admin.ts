import Employee from '../exercise_2/Employee'

export default class Admin extends Employee {
    subsistenceAllowance:number 

    constructor(name:string, alias:string,phone:string, baseSalary:number, fee:number, sectorCode:string, substanceAllowance:number) {
        super(name, alias, phone, sectorCode,baseSalary, fee )

        this.subsistenceAllowance = substanceAllowance
    }

    public getSubsistenceAllowance():number {
        return this.subsistenceAllowance
    }

    public setsubsistenceAllowance(subsistenceAllowance:number):void {
        this.subsistenceAllowance = subsistenceAllowance
    }
}