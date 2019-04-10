import { Personagem, Soldado, Cavaleiro } from "./personagens";


class Jogo{
    personagens: Array<Personagem> = [];

    incluir(p:Personagem){
        for (let personagem of this.personagens){
            if (p.id == personagem.id){
                console.log(`O personagem "${p.nome}" já está cadastrado no jogo`);
                return;
            }
        }
        this.personagens.push(p);   
    }

    consultar(idPersonagem){
        for (let personagem of this.personagens){
            if (idPersonagem == personagem.id){
                return personagem;
            }
        }
        return null;
    }


    atacar(idPersonagem1:number, idPersonagem2:number){
        let personagem1 = this.consultar(idPersonagem1);
        let personagem2 = this.consultar(idPersonagem2);

        if (personagem1.id == personagem2.id){
            console.log("O personagem não pode se atacar");
            return;
        }
        
        if (personagem1 instanceof Soldado){
            personagem1.atacar(personagem2);
        }else if(personagem1 instanceof Cavaleiro){
            personagem1.atacar(personagem2);
        }else{
            console.log("Personagem não pode atacar");
            return;
        }
    }


    avaliarBatalha(){
        for (let personagem of this.personagens){
            console.log(` id: ${personagem.id} \n nome: ${personagem.nome} \n Energia: ${personagem.energia} \n Está vivo? ${personagem.estaVivo()} \n\n\n `)
        }
        console.log("-------------------------------------------------------------------------------")
    }

}

export {Jogo}