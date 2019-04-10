import {Jogo} from "./jogo";
import { Soldado, Personagem, Cavaleiro } from "./personagens";

let personagem = new Personagem(1, "person", 20);
let soldado1 = new Soldado(2, "soldier1", 100);
let soldado2 = new Soldado(3, "soldier2", 100);
let cavaleiro = new Cavaleiro(4, "knight", 100);

soldado1.setForcaAtaque(5);
soldado2.setForcaAtaque(7);
cavaleiro.setForcaAtaque(10);

let jogo = new Jogo();

jogo.incluir(personagem);
jogo.incluir(soldado1);
jogo.incluir(soldado2);
jogo.incluir(cavaleiro);

jogo.avaliarBatalha();
jogo.atacar(personagem.id, soldado1.id);
jogo.avaliarBatalha();
jogo.atacar(soldado2.id, soldado1.id);
jogo.avaliarBatalha();
jogo.atacar(cavaleiro.id, soldado2.id);
jogo.avaliarBatalha();
jogo.atacar(cavaleiro.id, soldado2.id);
jogo.avaliarBatalha();
jogo.atacar(soldado1.id, soldado1.id);
jogo.avaliarBatalha();
jogo.atacar(soldado1.id, cavaleiro.id);
jogo.avaliarBatalha();