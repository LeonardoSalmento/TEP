"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Alo = (function () {
    //nome:String;
    // constructor (nome:String){
    //     this.nome = nome;
    // }
    //    constructor (readonly nome:String){
    //     this.nome = nome;
    // }
    function Alo(nome) {
        this.nome = nome;
    }
    Alo.prototype.dizerAlo = function () {
        console.log("Ol\u00E1, " + this.nome);
    };
    return Alo;
}());
var alo = new Alo("Ely");
alo.dizerAlo();
var Post = (function () {
    function Post(_text) {
        this._text = _text;
    }
    Object.defineProperty(Post.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (text) {
            this._text = text;
        },
        enumerable: true,
        configurable: true
    });
    return Post;
}());
exports.Post = Post;
var p = new Post("textão");
p.text = 'novo texto';
console.log(p.text);
var AdvancedPost = (function (_super) {
    __extends(AdvancedPost, _super);
    function AdvancedPost() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._likes = 0;
        return _this;
    }
    AdvancedPost.prototype.addHastag = function (hashtag) {
        this.hashtags.push(hashtag);
    };
    AdvancedPost.prototype.like = function () { this._likes++; };
    Object.defineProperty(AdvancedPost.prototype, "likes", {
        get: function () { return this._likes; },
        enumerable: true,
        configurable: true
    });
    return AdvancedPost;
}(Post));
exports.AP = AdvancedPost;
var ap = new AdvancedPost('meu texto');
ap.like();
ap.like();
console.log(ap.likes);
// let c = new AdvancedPost("post text", "Ely");
// c.addHastag("a");
var Mensagens;
(function (Mensagens) {
    function info(msg) {
        console.log(msg);
    }
    Mensagens.info = info;
    function erro(msg) {
        console.log(msg);
    }
    Mensagens.erro = erro;
})(Mensagens || (Mensagens = {}));
Mensagens.info("Info");
Mensagens.erro("Erro");
var Stack = (function () {
    function Stack() {
        this._data = [];
    }
    Stack.prototype.push = function (item) {
        this._data.push(item);
    };
    Stack.prototype.pop = function () {
        this._data.pop();
    };
    Object.defineProperty(Stack.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    return Stack;
}());
var s = new Stack();
var s2 = new Stack();
s.push(1);
//# sourceMappingURL=classes.js.map