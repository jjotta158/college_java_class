class Endereco {
    public rua: string
    public bairro: string
    public cidade: string
    public estado: string
    public cep: number
    public complemento!: string

    constructor(rua: string, bairro: string, cidade:string, estado:string, cep:number, complemento:string="") {
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
        this.cep = cep
        this.complemento = complemento
    }
}

export default Endereco