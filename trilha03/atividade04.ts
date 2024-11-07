
class Animal {
    public energia: number;
    constructor() {
        this.energia = 50;
    }

    statusEnergia() {
        console.log(`energia do Animal: ${this.energia}`);
    }

    comer() {
        console.log("Caçar para comer.");
    };
}

class Leao extends Animal {
    statusEnergia() {
        console.log(`energia do leão: ${this.energia}`);
    }
    
    constructor() {
        super();
    }

    comer(): void {
        console.log(`Leão caça para comer,
        ${this.energia - 10}, mas recupera suas forças comendo ${this.energia + 15}`
        );
    }
};

class Passaro extends Animal {
     statusEnergia() {
        console.log(`energia do Passaro: ${this.energia}`);
    }
    
    constructor() {
        super();
    }

    comer(): void {
        console.log(`Passaro caça para comer, mas não perde energia suas caçando ${this.energia + 15}`);
    }
};

const leaozinho = new Leao;
leaozinho.statusEnergia();
leaozinho.comer();


const passarozinho = new Passaro;
passarozinho.statusEnergia();
passarozinho.comer();