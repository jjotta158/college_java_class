export default class Person {

    private cpf:number    
    private name:string
    private dataNascimento:string
    
    constructor(name:string, cpf:number, dataNascimento:string) {
        this.name = name;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
    }

    public getName():string {
        return this.name
    }

    public getcpf():number {
        return this.cpf
    }

    public getDataNasciment():string {
        return this.dataNascimento
    }

    public setName(name:string):void {
        this.name = name
    }

    public setCpf(cpf:number):void {
        this.cpf = cpf
    }

    public setDataNascimento(dataNascimento:string):void {
        this.dataNascimento = dataNascimento
    }

}