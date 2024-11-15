interface Documento {
    titulo: string;
    conteudo: string;
};

class texto implements Documento {
    titulo: string;
    conteudo: string;

    constructor(titulo: string, conteudo: string) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    };

    mostrarDocument() {
        console.log(`Titulo: ${this.titulo}
        conteudo: ${this.conteudo}` )
    }
};

const Documento01 = new texto("Array", "Um array é uma estrutura de dados que armazena uma coleção de elementos");
Documento01.mostrarDocument();