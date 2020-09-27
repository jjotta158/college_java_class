interface proprietarioObj {
    nome: string,
    getCpf(): number,
    getRg(): number,
    data_nascimento: string,
    endereco: endereco
}
interface endereco {
    rua: string
    bairro: string
    cidade: string
    estado: string
    cep: number
    complemento: string
}
interface marca {
    nome: string
    numero_modelos: number
    ano_lancamento: string
    getCodigoIndentificador(): number
}

export {proprietarioObj, endereco, marca}