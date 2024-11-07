class contaBancaria {
    private nome: string;
    private saldo: number;

    constructor(nome:string, saldo:number = 0) {
        this.nome = nome;
        this.saldo = saldo;
    }

    public depositar(valor: number): number {
        return this.saldo + this.depositar(valor);
    }

    public sacar(valor: number): number {
        return this.saldo - this.sacar(valor);
    }
}

const conta = new contaBancaria("andré");
console.log(conta.depositar(100));
