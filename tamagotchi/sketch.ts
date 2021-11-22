class Tamagotchi {
    private energia: number;
    private fome: number;
    private banho: number;
    private energiaMax: number;
    private fomeMax: number;
    private banhoMax: number;
    private diamantes: number;
    private idade: number;
    private vivo: boolean;

    constructor(energia: number, fome: number, banho: number) {
        this.energia = energia;
        this.fome = fome;
        this.banho = banho;
        this.energiaMax = 100;
        this.fomeMax = 100;
        this.banhoMax = 100;
        this.diamantes = 0;
        this.idade = 0;
        this.vivo = true;
    }

    setEnergia(valor: number): void {
        if(valor <= 0) {
            this.energia = 0;
            console.log("Perdeu: bichinho morreu de sono");
            this.vivo = false;
        } else if(valor > this.energiaMax) {
            this.energia = this.energiaMax;
        } else {
            this.energia = valor;
        }
    }
    setFome(valor: number): void {
        if(valor <= 0) {
            this.fome = 0;
            console.log("Perdeu: bichinho morreu de fome");
            this.vivo = false;
        } else if(valor > this.fomeMax) {
            this.fome = this.fomeMax;
        } else {
            this.fome = valor;
        }
    }
    setBanho(valor: number): void {
        if(valor <= 0) {
            this.banho = 0;
            console.log("Perdeu: bichinho morreu de porquice");
            this.vivo = false;
        } else if(valor > this.banhoMax) {
            this.banho = this.banhoMax;
        } else
            this.banho = valor;
    }

    getEnergia(): number {
        return this.energia;
    }
    getFome(): number {
        return this.fome;
    }
    getBanho(): number {
        return this.banho;
    }
    getEnergiaMax(): number {
        return this.energiaMax;
    }
    getFomeMax(): number {
        return this.fomeMax;
    }
    getBanhoMax(): number {
        return this.banhoMax;
    }

    toString(): string {
        return `Energia/Max: ${this.energiaMax} Saciedade/Max:${this.fomeMax} Limpeza/Max:${this.banhoMax} Diamantes:${this.diamantes} Idade: ${this.idade}`;
    }
    testAlive(): boolean {
        if(this.vivo) {
            return true;
        }
        console.log("Perdeu: Tamagotchi morreu");
        return false;
    }

    brincar(valor: number): void {
        this.energia -= valor;
        this.fome -= valor;
        this.banho -= valor;
        this.diamantes += valor;
    }
    comer(valor: number): void {
        this.energia -= valor;
        this.fome += valor;
        this.diamantes += valor;
    }
    tomarBanho(valor: number): void {
        this.energia -= valor;
        this.banho += valor;
        this.diamantes += valor;
    }
    dormir(valor: number): void {
        this.energia = 100;
        this.idade += valor;
    }
}