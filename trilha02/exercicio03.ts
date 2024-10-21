class produto {
    nome: string;
    preco: number;
    qunatidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.qunatidade = quantidade;
    }

    calcularValor() {
        let valor = this.preco * this.qunatidade;
        return "valor total: " + valor;
    }
}

new produto("arroz", 22, 2);
