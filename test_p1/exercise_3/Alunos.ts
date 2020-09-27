export default class Aluno {
    private matricula: number
    private ra:number
    public nome:string
    public curso:string

    constructor(matricula: number, ra: number, nome: string, curso: string) {
        this.matricula = matricula
        this.ra = ra
        this.nome = nome
        this.curso = curso
    }

    public getMatricula(): number {
        return this.matricula
    }

    public getRa(): number {
        return this.ra
    }

    public setMatricula(matricula: number) {
        this.matricula = matricula
    }

    public setRa(ra: number) {
        this.ra = ra
    }

}