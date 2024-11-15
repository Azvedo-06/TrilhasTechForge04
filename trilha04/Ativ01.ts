interface produto {
    id: number;
    nome: string;
    preco: number; 
};

class ItemLoja implements produto {
    id: number;
    nome: string;
    preco: number;

    constructor(id: number, nome: string, preco: number) {
        this.id = id;
        this.nome =  nome;
        this.preco = preco;
    }
};


const ItemDaLoja = new ItemLoja(122, "Pasta de dante", 2.30);
console.log(ItemDaLoja);