import Animal from './Animal'
class Cachorro extends Animal{
    public qtdPatas:number

    constructor(reino:string ="Animalia", filo:string = "Cordados", nome:string, qtdPatas:number) {
        super(reino, filo, nome)
        this.qtdPatas = qtdPatas
    }

    public emitirSom() {
        console.log("AU AU")
    }
}