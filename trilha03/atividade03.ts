abstract class Pagamento {
    abstract processar(): void;
};

class PagamentoCartao implements Pagamento {
    private senhaCartao: number;
    constructor(senhaCartao: number) {
        this.senhaCartao = senhaCartao;
    };

    processar() {
        if (this.senhaCartao == 123) {
            console.log("Pagamento aprovado via Cartão");
        }
        else {
            console.log("Pagamento rejeitado, Senha incorreta");
        }
    };
};

class PagamentoBoleto extends Pagamento {
    CodigoBoleto(): string {
        return  "h126dq-912euedw";
    }

    processar() {
        console.log(`Pagamento via boleto, codigo boleto: ${this.CodigoBoleto}`);
    };
}

const pagarCartao = new PagamentoCartao(123)
pagarCartao.processar();

const pagarBoleto = new PagamentoBoleto;
pagarBoleto.processar();