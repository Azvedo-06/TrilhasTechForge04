class agenda {
    compromissos: Array<string>;

    constructor() {
        this.compromissos = [];
    }

    adicionar(compromissos: string): void {
        this.compromissos.push(compromissos);
    }

    listar(): string[] {
        return this.compromissos;
    }
}

const minhaagenda = new agenda();
minhaagenda.adicionar("tirar lixo");