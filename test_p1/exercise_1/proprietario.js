"use strict";
exports.__esModule = true;
var Proprietario = /** @class */ (function () {
    function Proprietario(nome, cpf, rg, endereco) {
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
        this.endereco = endereco;
    }
    Proprietario.prototype.getCpf = function () {
        return this.cpf;
    };
    Proprietario.prototype.getRg = function () {
        return this.rg;
    };
    Proprietario.prototype.setCpf = function (cpf) {
        this.cpf = cpf;
    };
    Proprietario.prototype.setRg = function (rg) {
        this.rg = rg;
    };
    return Proprietario;
}());
exports["default"] = Proprietario;
