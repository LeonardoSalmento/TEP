"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var personagens_1 = require("./personagens");
var Jogo = /** @class */ (function () {
    function Jogo() {
        this.personagens = [];
    }
    Jogo.prototype.incluir = function (p) {
        for (var _i = 0, _a = this.personagens; _i < _a.length; _i++) {
            var personagem = _a[_i];
            if (p.id == personagem.id) {
                console.log("O personagem \"" + p.nome + "\" j\u00E1 est\u00E1 cadastrado no jogo");
                return;
            }
        }
        this.personagens.push(p);
    };
    Jogo.prototype.consultar = function (idPersonagem) {
        for (var _i = 0, _a = this.personagens; _i < _a.length; _i++) {
            var personagem = _a[_i];
            if (idPersonagem == personagem.id) {
                return personagem;
            }
        }
        return null;
    };
    Jogo.prototype.atacar = function (idPersonagem1, idPersonagem2) {
        var personagem1 = this.consultar(idPersonagem1);
        var personagem2 = this.consultar(idPersonagem2);
        if (personagem1.id == personagem2.id) {
            console.log("O personagem não pode se atacar");
            return;
        }
        if (personagem1 instanceof personagens_1.Soldado) {
            personagem1.atacar(personagem2);
        }
        else if (personagem1 instanceof personagens_1.Cavaleiro) {
            personagem1.atacar(personagem2);
        }
        else {
            console.log("Personagem não pode atacar");
            return;
        }
    };
    Jogo.prototype.avaliarBatalha = function () {
        for (var _i = 0, _a = this.personagens; _i < _a.length; _i++) {
            var personagem = _a[_i];
            console.log(" id: " + personagem.id + " \n nome: " + personagem.nome + " \n Energia: " + personagem.energia + " \n Est\u00E1 vivo? " + personagem.estaVivo() + " \n\n\n ");
        }
        console.log("-------------------------------------------------------------------------------");
    };
    return Jogo;
}());
exports.Jogo = Jogo;
//# sourceMappingURL=jogo.js.map