interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
  }
  

  class Biblioteca implements Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
    
   
    livros: Livro[];
  
    
    constructor(livros: Livro[]) {
      this.livros = livros;
      this.titulo = 'Biblioteca'; // exemplo de valor, 
      this.autor = 'Administração da Biblioteca'; 
      this.disponivel = true; 
    }
  
    buscarLivrosDisponiveis(): Livro[] {
      return this.livros.filter(livro => livro.disponivel);
    }
  }
 
  const biblioteca1 = new Biblioteca([
    { titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', disponivel: true },
    { titulo: '1984', autor: 'George Orwell', disponivel: false },
    { titulo: 'Dom Casmurro', autor: 'Machado de Assis', disponivel: true },
    { titulo: 'A Moreninha', autor: 'Joaquim Manuel de Macedo', disponivel: false },
  ]);
  

  const livrosDisponiveis = biblioteca.buscarLivrosDisponiveis();
  console.log(livrosDisponiveis);