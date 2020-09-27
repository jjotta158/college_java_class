"use strict";
exports.__esModule = true;
var Endereco = /** @class */ (function () {
    function Endereco(rua, bairro, cidade, estado, cep, complemento) {
        if (complemento === void 0) { complemento = ""; }
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
        this.complemento = complemento;
    }
    return Endereco;
}());
exports["default"] = Endereco;
