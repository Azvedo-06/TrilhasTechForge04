class livro {
    titulo: string;
    autor: string;
    lido: boolean;

    constructor(titular: string, autor: string, lido: boolean) {
        this.titulo = titular;
        this.autor = autor;
        this.lido = lido;
    }

    marcaoomolido() {
        if (true) {
            console.log("lido");
        }
        else {
            console.log("não lido");
        }
    } 
}

new livro("titulo", "autor", true);