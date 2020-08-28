import Person from '../Person'

export default class Student extends Person{

    private registration:string

    constructor(name:string, cpf:number, dataNascimento:string, registration:string) {
        super(name, cpf, dataNascimento)
        this.registration = registration
    }

    public getRegistration():string {
        return this.registration
    }

    public setRegistration(registration:string) {
        this.registration = registration
    }
}
