export default class Animal {
    public reino:string
    public filo:string
    public nome:string
    
    constructor(reino:string, filo:string, nome:string) {
        this.reino = reino
        this.filo = filo
        this.nome = nome
    }

    public emitirSom() {
        console.log("ROAR")
    }
}