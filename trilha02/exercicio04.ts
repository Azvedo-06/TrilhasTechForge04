class temperatura {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    fahrenheit() {
        let result = (this.valor * 9/5) + 32;
        return "temperatuda em fahrenheit: " + result;
    }

    kelvin() {
        let result = (this.valor + 273,15);
        return "temperatuda em kelvin: " + result
    }
}

new temperatura(26);