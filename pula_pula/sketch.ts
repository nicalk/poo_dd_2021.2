class Criança {
    nome: string;
    idade: number;
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
    toString(): string {
        return `${this.nome} tem ${this.idade} anos`;
    }
}

class Pula_Pula {
    criança: Criança | null;
    vagas: Array<Criança | null>;
    espera: Array<Criança>;
    constructot(qtdVagas: number) {
        this.vagas = [];
        for (let i = 0; i < qtdVagas; i++) {
            this.vagas.push(null);
        }
        this.espera = [];
    }
    //Inserir crianças na fila de espera do pula pula
    chegar(criança: Criança): void {
        this.espera.push(criança);
    }

    //Mover a primeira criança da fila de espera do pula pula para dentro do pula pula
    entrar(indice: number): boolean {
        if (indice < 0) {
            this.vagas[indice = this.espera()];
        }
        return true;
    }

    //Mover a primeira criança que entrou no pula pula para o final da fila de espera
    sair(indice: number): boolean {
        if (indice < 0 || indice >= this.vagas.length) {
            console.log();
        }
        return false;
    }

    //Os pais chamaram, então você busca a criança seja da fila de entrada ou de dentro do pula pula e retira do brinquedo
    paisChamam(nome: string): Criança {
        for (let i = 0; i < this.vagas.length; i++) {
            let criança = this.vagas[i];
            if (criança == this.nome) {

            }
        }
    }

    //Idade limite para o pula pula
    idadeMax(idade: number): boolean {
        if(this.criança.idade > 12) {
            console.log("a criança ultrapassa a idade limite de 12 anos");
        return false;
        }
    }
}