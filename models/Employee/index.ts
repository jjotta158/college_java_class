import Person from '../Person'

export default class Employee extends Person {
    private salary:number
    private admissionDate:string
    
    constructor(name:string, cpf:number, dataNascimento:string, salary:number, admissionDate:string) {
        super(name, cpf, dataNascimento)
        this.salary = salary
        this.admissionDate = admissionDate
    }

    public getSalary():number {
        return this.salary
    }

    public getAdmissionDate():string {
        return this.admissionDate
    }

    public setSalary(salary:number) {
        this.salary = salary
    }

    public setAdmissionDate(admissionDate:string) {
        this.admissionDate = admissionDate
    }
}