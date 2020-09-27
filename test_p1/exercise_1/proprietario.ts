import {endereco} from './interfaces'

class Proprietario {
    public nome: string
    private cpf: number
    private rg: number
    public data_nascimento!: string
    public endereco:endereco

    constructor(nome: string, cpf: number, rg: number, endereco: endereco) {
        this.nome = nome
        this.cpf = cpf
        this.rg = rg
        this.endereco = endereco
    }
    public getCpf():number {
        return this.cpf
    }
    public getRg():number {
        return this.rg
    }

    public setCpf(cpf:number):void {
        this.cpf = cpf
    }

    public setRg(rg:number):void {
        this.rg = rg
    }
}

export default Proprietario