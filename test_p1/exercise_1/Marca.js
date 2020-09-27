"use strict";
exports.__esModule = true;
var Marca = /** @class */ (function () {
    function Marca(nome, numero_modelos, ano_lancamento, codigo_indentificador) {
        this.nome = nome;
        this.numero_modelos = numero_modelos;
        this.ano_lancamento = ano_lancamento;
        this.codigo_indentificador = codigo_indentificador;
    }
    Marca.prototype.getCodigoIndentificador = function () {
        return this.codigo_indentificador;
    };
    Marca.prototype.setCodigoIndentificador = function (codigo_indentificador) {
        this.codigo_indentificador = codigo_indentificador;
    };
    return Marca;
}());
exports["default"] = Marca;
