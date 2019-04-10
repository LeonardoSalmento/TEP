class Alo{
    //nome:String;

    // constructor (nome:String){
    //     this.nome = nome;
    // }

//    constructor (readonly nome:String){
        //     this.nome = nome;
        // }
    
    
    constructor (public nome:String) {}

    dizerAlo() : void{
        console.log(`Olá, ${this.nome}`)
    }
}


let alo = new Alo("Ely");
alo.dizerAlo();

class Post{
    constructor(private _text:String){}

    get text(){
        return this._text;
    }

    set text(text :String){
        this._text = text;
    }
}

let p = new Post("textão");
p.text = 'novo texto'
console.log(p.text);


interface Indexable {
    hashtags: String[];
    addHastag(hashtag:String)
}

class AdvancedPost extends Post implements Indexable{
    hashtags: String[];
    addHastag(hashtag: String) {
        this.hashtags.push(hashtag);
    }
    private _likes : number = 0;

    like() { this._likes ++; }

    get likes(){return this._likes;}

}

let ap = new AdvancedPost('meu texto');
ap.like();
ap.like();
console.log(ap.likes);

// let c = new AdvancedPost("post text", "Ely");
// c.addHastag("a");

namespace Mensagens{
    export function info(msg){
        console.log(msg);
    }

    export function erro(msg){
        console.log(msg);
    }
}


Mensagens.info("Info");
Mensagens.erro("Erro");


class Stack<T>{
    private _data: T[] = [];

    push(item: T){
        this._data.push(item);
    }

    pop(){
        this._data.pop()
    }

    get data(){
        return this._data;
    }
}

let s = new Stack<number>();
let s2 = new Stack<String>();

s.push(1);
//s.push("2");




export {Post, AdvancedPost as AP}