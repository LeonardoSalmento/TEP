"use strict";
// Tu não pode voltar a me abraçar e nem a falar comigo normalmente?
// Falo isso pq está me incomodando :/
// Sim, estou triste e com saudades 
Object.defineProperty(exports, "__esModule", { value: true });
// enum Cores{Vermelho = 1, Verde = 3, Azul};
// let c: Cores;
// c = Cores.Azul;
// console.log(Cores[3]);
// let numeros: number[] = [1,2,3];
// let numeros2: Array<number> = [1,2,3];
// console.log(numeros);
// numeros2.push(2);
// console.log(numeros2);
// for (let i: number = 0; i<3; i++)
//     console.log(i);
// console.log(i);
// for (var i : number = 0; i<3; i++)
//     console.log(i);
// console.log(i);
// let numeros = [4,5,6];
// for (let numero of numeros){
//     console.log(numero);
// }
// for (let numero in numeros){
//     console.log(numero);
// }
// function dobrar(numero : number) :number {
//     return 2 * numero;
// }
// console.log(dobrar(5));
// function add(x: number, y: number): number{
//     return x + y;
// }
// console.log(add(2,3));
// let a = function triplica(numero : number): number{
//     return numero * 3;
// }
// console.log(a(5));
// function soma(...numeros: number[]): number{
//     let res : number = 0;
//     for (let numero of numeros)
//         res = res + numero;
//     return res
// }
// console.log(soma());
// console.log(soma(4,5,7,8));
// let a = (numero) => numero * 3;
// console.log(a);
// let numeros: number[] = [1,2,3,4];
// numeros = numeros.map(x=> 2* x);
// console.log(numeros);
// ********* 
// 1
//A)
// let a = 10;
// a = "2";
// Não compila, pois a variável "declara" inicialmente como número e não pode ser atribuida com uma string nela.
// B)
// let b: any = 10;
//     b = 2;
// Compila, apenas atribui um novo valor na variavel.
// C)
// let c :number = 10;
//     c = 2;
// Compila, apenas atribui um novo valor na variavel.
//************** */
//   2
// function soma(x: number, y?: any):number {
//     return x + y;
// }
//A)
//console.log(soma(1,2));
// R = 3
//B)
//console.log(soma(1,"2"));
// R = 12
//C)
//console.log(soma(1));
//NaN
//************************ */
//     3
// enum siglas{PI, CE, MA};
//A
// for (let i : number = 0; i<3; i++)
//     console.log(siglas[i])
// B
// for (let sigla in siglas)
//     console.log(sigla)
// Aparece os indices e as siglas
//************************************** */
//                       4
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["Segunda"] = 0] = "Segunda";
    DiasSemana[DiasSemana["Ter\u00E7a"] = 1] = "Ter\u00E7a";
    DiasSemana[DiasSemana["Quarta"] = 2] = "Quarta";
    DiasSemana[DiasSemana["Quinta"] = 3] = "Quinta";
    DiasSemana[DiasSemana["Sexta"] = 4] = "Sexta";
})(DiasSemana || (DiasSemana = {}));
;
//let c: Cores;
// c = Cores.Azul;
// console.log(Cores[3]);
// let numeros: number[] = [1,2,3];
// let numeros2: Array<number> = [1,2,3];
// ******************
//                       5
// function exibir(...letras: string[]): string{
//     let conc : string = "";
//     for (let letra of letras)
//         conc = conc + letra;
//     return conc
// }
// console.log(exibir("a", "b", "c"));
// console.log(exibir("a", "b", "c", "d"));
//***************************** */
//                         6
// let ola = () => console.log("ola");
// ola();
// *************************************
//                           7
//const array = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10, 11, 12, 13, 14, 15];
//par() x => (x%2 == 0)
//let a = array.filter(par);
//console.log(array);
var classes_1 = require("./classes");
var post2 = new classes_1.Post("meus post");
var post3 = new classes_1.AP("teste2");
//# sourceMappingURL=app.js.map