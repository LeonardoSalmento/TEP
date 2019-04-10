"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Personagem = /** @class */ (function () {
    function Personagem(id, nome, energia) {
        this.id = id;
        this.nome = nome;
        this.energia = energia;
    }
    Personagem.prototype.estaVivo = function () {
        if (this.energia > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Personagem.prototype.defenderAtaque = function (ataque) {
        if ((this.energia - ataque) > 0) {
            this.energia -= ataque;
        }
        else {
            this.energia = 0;
        }
    };
    return Personagem;
}());
exports.Personagem = Personagem;
var Soldado = /** @class */ (function (_super) {
    __extends(Soldado, _super);
    function Soldado() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Soldado.prototype.getForcaAtaque = function () {
        return this.forcaAtaque;
    };
    Soldado.prototype.setForcaAtaque = function (forcaAtaque) {
        this.forcaAtaque = forcaAtaque;
    };
    Soldado.prototype.atacar = function (p) {
        p.defenderAtaque(this.forcaAtaque);
    };
    Soldado.prototype.defenderAtaque = function (ataque) {
        if ((this.energia - (ataque / 2)) > 0) {
            this.energia -= (ataque / 2);
        }
        else {
            this.energia = 0;
        }
    };
    return Soldado;
}(Personagem));
exports.Soldado = Soldado;
var Cavaleiro = /** @class */ (function (_super) {
    __extends(Cavaleiro, _super);
    function Cavaleiro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cavaleiro.prototype.atacar = function (p) {
        p.defenderAtaque((2 * this.forcaAtaque));
    };
    Cavaleiro.prototype.defenderAtaque = function (ataque) {
        if ((this.energia - (ataque / 3)) > 0) {
            this.energia -= (ataque / 3);
        }
        else {
            this.energia = 0;
        }
    };
    return Cavaleiro;
}(Soldado));
exports.Cavaleiro = Cavaleiro;
//# sourceMappingURL=personagens.js.map