interface LivroBiblioteca {
    titulo?: string;
    autor?: string;
    genero?: string;
    disponivel?: boolean;
  }
  
  
  class BibliotecaGestao implements LivroBiblioteca{
      titulo: string;
      autor: string;
      genero: string;
      disponivel: boolean;
      livros: LivroBiblioteca[];
  
  
    constructor(livros: LivroBiblioteca[]) {
      this.livros = livros;
    }
  
  
    filtrarPorGenero(genero: string): LivroBiblioteca[] {
      return this.livros.filter(livro => livro.genero.toLowerCase() === genero.toLowerCase());
    }
  
    
    buscarPorAutor(autor: string): LivroBiblioteca[] {
      return this.livros.filter(livro => livro.autor.toLowerCase() === autor.toLowerCase());
    }
  
    
    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
      return this.livros
        .filter(livro => livro.disponivel)
        .sort((a, b) => a.titulo.localeCompare(b.titulo)); 
    }
  }
  
  
  const biblioteca = new BibliotecaGestao([
    { titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', genero: 'Fantasia', disponivel: true },
    { titulo: '1984', autor: 'George Orwell', genero: 'Distopia', disponivel: false },
    { titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', genero: 'Fantasia', disponivel: true },
    { titulo: 'Dom Casmurro', autor: 'Machado de Assis', genero: 'Literatura Brasileira', disponivel: true },
    { titulo: 'A Revolução dos Bichos', autor: 'George Orwell', genero: 'Distopia', disponivel: true },
  ]);
  
  
  console.log("Livros de Fantasia:");
  console.log(biblioteca.filtrarPorGenero('Fantasia')); 
  
  console.log("\nLivros de George Orwell:");
  console.log(biblioteca.buscarPorAutor('George Orwell')); 
  
  console.log("\nLivros Disponíveis Ordenados:");
  console.log(biblioteca.obterLivrosDisponiveisOrdenados());