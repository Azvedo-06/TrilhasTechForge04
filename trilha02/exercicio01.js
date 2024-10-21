"use strict";
class contaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = 0;
    }
    depositar(number) {
        return this.saldo + this.depositar(number);
    }
    sacar(number) {
        return this.saldo - this.sacar(number);
    }
}
let conta = new contaBancaria("andré", 0);
console.log(conta.depositar(100));
