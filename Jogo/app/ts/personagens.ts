class Personagem{
    id: number;
    nome:String;
    energia: number;

    constructor (id:number, nome:String, energia:number){
        this.id = id;        
        this.nome = nome;
        this.energia = energia;
    }

    estaVivo(){
        if (this.energia > 0){
            return true;
        } else{
            return false;

        }
    }


    defenderAtaque(ataque:number){
        if ((this.energia - ataque) > 0){
            this.energia -= ataque
        }else{
            this.energia = 0;
        }
    }    
}

class Soldado extends Personagem{
    forcaAtaque:number;

    getForcaAtaque(){
        return this.forcaAtaque;
    }

    setForcaAtaque(forcaAtaque:number){
        this.forcaAtaque = forcaAtaque;
    }
    

    atacar(p:Personagem){
        p.defenderAtaque(this.forcaAtaque);
    }

    
    defenderAtaque(ataque:number){
        if ((this.energia - (ataque/2)) > 0){
            this.energia -= (ataque/2)
        }else{
            this.energia = 0;
        }
    }
}


class Cavaleiro extends Soldado{
    atacar(p:Personagem){
        p.defenderAtaque((2*this.forcaAtaque));
    }

    
    defenderAtaque(ataque:number){
        if ((this.energia - (ataque/3)) > 0){
            this.energia -= (ataque/3)
        }else{
            this.energia = 0;
        }
    }
}


export {Personagem, Soldado, Cavaleiro}