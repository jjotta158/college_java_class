export default class Veiculo {
    public modelo:string
    public cor:string
    public ano_fabricacao:string

    constructor(modelo:string, cor:string, ano_fabricacao:string) {
        this.modelo = modelo
        this.cor = cor
        this.ano_fabricacao = ano_fabricacao
    }
}