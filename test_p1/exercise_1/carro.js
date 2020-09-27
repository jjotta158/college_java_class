"use strict";
exports.__esModule = true;
var Carro = /** @class */ (function () {
    function Carro(modelo, cor, ano, chassis, proprietario, marca) {
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
        this.chassis = chassis;
        this.proprietario = proprietario;
        this.marca = marca;
    }
    Carro.prototype.getChassis = function () {
        return this.chassis;
    };
    Carro.prototype.getProprietario = function () {
        return this.proprietario;
    };
    Carro.prototype.setChassis = function (chassis) {
        this.chassis = chassis;
    };
    Carro.prototype.setProprietario = function (proprietario) {
        this.proprietario = proprietario;
    };
    return Carro;
}());
exports["default"] = Carro;
