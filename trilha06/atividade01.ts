/*class Order {
    private items: {item: string, preco: number, quantidade: number}[]  = [];
    precoTotal:  number = 0;
    pagamentoStatus: string = "";
    envioStatus: string = "";

    addItem(item: string, preco: number, quantidade: number) {
        this.items.push({item, preco, quantidade});
        this.calcularPreco();
    }

    calcularPreco(): void {
        this.precoTotal = 0;
        this.items.forEach(item =>{
            this.precoTotal = item.preco * item.quantidade;
        })
    }

    processoPagamento(): void {
        if (this.precoTotal > 0) {
            this.pagamentoStatus = "Pago";
        } else {
            console.log("O total do pedido não pode ser zero.");
        }
    }

    processoEnviar(): void {
        if (this.pagamentoStatus == "Pago") {
            this.envioStatus = "Produto Enviado";
        } else {
            console.log("Pagamento não realizado");
        }
    }


};
*/

//classes separadas

class Carrinho {
    items: {item: string, preco: number, quantidade: number} [] = [];
    precoTotal: number = 0;

    addItem(item:string, preco: number, quantidade: number) {
        this.items.push({item, preco, quantidade});
        this.calcularPrecoTotal();
    }

    calcularPrecoTotal(): void {
       this.precoTotal = this.items.reduce((total, Item) => total + (Item.preco * Item.quantidade), 0);
    }
}

class Pagamento {
    pagamentoStatus: string = "pendente";

    
    processoPagamento(precoTotal: number): void {
        if (precoTotal > 0) {
            this.pagamentoStatus = "Pago";
        } else {
            console.log("O total do pedido não pode ser zero.");
        }
    }
}

class Enviar {
    envioStatus: string = "pendente";

    processoEnviar(pagamentoStatus: string): void {
        if (pagamentoStatus == "Pago") {
            this.envioStatus = "Produto Enviado";
        } else {
            console.log("Pagamento não realizado");
        }
    }
}

class OrdemPedido {
    carrinho: Carrinho = new Carrinho();
    pagamento: Pagamento = new Pagamento();
    envio: Enviar = new Enviar();

    addItem(item: string, preco: number, quantidade: number): void {
        this.carrinho.addItem(item, preco, quantidade);
    }

    processoPagamento(): void {
        this.pagamento.processoPagamento(this.carrinho.precoTotal);
    }

    processoEnvio(): void {
        this.envio.processoEnviar(this.pagamento.pagamentoStatus);
    }
}

let ordem = new OrdemPedido();

ordem.addItem("Escova de dente", 4.00, 2);
ordem.addItem("Pasta de dente", 2.50, 2);

ordem.processoPagamento();
ordem.processoEnvio();

console.log(`Preço Total: ${ordem.carrinho.precoTotal}`);
console.log(`Status do Pagamento: ${ordem.pagamento.pagamentoStatus}`);
console.log(`Status do Envio: ${ordem.envio.envioStatus}`);