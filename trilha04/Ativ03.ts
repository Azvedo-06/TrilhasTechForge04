interface ProdutoLoja {
    codigo?: number;
    nome?: string;
};

class Loja implements ProdutoLoja {
    codigo?: number;
    nome?: string;
    produtos: ProdutoLoja[];

    constructor(produtos: ProdutoLoja[]) {
        this.produtos = produtos;
    }
;

    buscarProduto(codigo: number): ProdutoLoja |  undefined {
       
        return this.produtos.find((produto) => produto.codigo === codigo)
    };
};

const Produtos = new Loja([ 
    {codigo: 1, nome: "pasta"}, 
    {codigo: 2, nome: "gel"}, 
    {codigo: 3, nome: "tinta"}, 
    {codigo: 4, nome: "escova"} 
    ]);

const produtos = Produtos.buscarProduto(2)
console.log(produto);