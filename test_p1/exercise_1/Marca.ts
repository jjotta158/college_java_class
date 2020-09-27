class Marca {
    public nome: string
    public numero_modelos: number
    public ano_lancamento: string
    private codigo_indentificador:number

    constructor(nome:string, numero_modelos:number, ano_lancamento:string, codigo_indentificador:number) {
        this.nome = nome
        this.numero_modelos = numero_modelos
        this.ano_lancamento = ano_lancamento
        this.codigo_indentificador = codigo_indentificador
    }

    public getCodigoIndentificador():number {
        return this.codigo_indentificador
    }

    public setCodigoIndentificador(codigo_indentificador:number):void {
        this.codigo_indentificador = codigo_indentificador
    }
}

export default Marca