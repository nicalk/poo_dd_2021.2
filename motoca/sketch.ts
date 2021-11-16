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

class Motoquinha {
    criança: Criança | null;
    potencia: number;
    tempo: number;
    constructor() {
        this.criança = null;
        this.potencia = 1;
        this.tempo = 0;
    }
    subir(pessoa: Criança): boolean {
        if(this.criança === null) {
            this.criança = pessoa;
            return true;
        }
        console.log("a motoquinha já esta ocupada");
        return false;
    }
    descer(): Criança | null {
        if(this.criança === null) {
            return null;
        }
    }
    comprar_tempo(qtd: number): void{
        this.tempo += qtd;
    }
    dirigir_tempo(tempo: number): boolean {
        if(this.criança == null) {
            console.log("a motoquinha esta vazia");
            return false;
        }
        if(this.criança.idade > 10) {
            console.log("a criança ultrapassa a idade limite de 10 anos");
            return false;
        }
        if(this.tempo < tempo) {
            console.log("seu tempo acabou");
            console.log(`você andou ${tempo} minutos`);
            return false;
        }
    }
    buzinar(): string {
        let saida = "P";
        for (let i = 0; i < this.potencia; i++) {
            saida += "e";
        }
        return saida + "m";
    }
    toString(): string {
        let nome = "vazio";
        if(this.criança != null) {
            nome = this.criança.nome;
        }
        return `[ ${nome}]`;
    }
}