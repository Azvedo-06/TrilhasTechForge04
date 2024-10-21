class contaBancaria {
    nome: string;
    saldo: number;

    constructor(titular:string, saldo:number = 0) {
        this.nome = titular;
        this.saldo = saldo;
    }

    depositar(valor: number): number {
        return this.saldo + this.depositar(valor);
    }

    sacar(valor: number): number {
        return this.saldo - this.sacar(valor);
    }
}

new contaBancaria("andré");
console.log(conta.depositar(100));
