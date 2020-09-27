import {marca, proprietarioObj} from './interfaces'

class Carro {
    public modelo:string;
    public cor:string;
    public ano:string
    public marca:marca
    private chassis:number;
    private proprietario:proprietarioObj;
    public velocidade_maxima!:number;
    public velocidade_atual!:number
    public teto_solar!:boolean;
    public numero_marchas!:number;
    public cambio_automatico!:boolean;
    public volume_combustivel!:number;

    constructor(modelo:string, cor:string, ano:string, chassis:number, proprietario:proprietarioObj, marca:marca) {
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
        this.chassis = chassis
        this.proprietario = proprietario
        this.marca = marca
    }

    public getChassis():number {
        return this.chassis
    }

    public getProprietario():proprietarioObj {
        return this.proprietario
    }

    public setChassis(chassis:number):void {
        this.chassis = chassis
    }

    public setProprietario(proprietario:proprietarioObj):void {
        this.proprietario = proprietario
    }
}

export default Carro