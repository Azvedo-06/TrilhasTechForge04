abstract class FavoriteManager {
    protected favorites: string[];
  
    constructor() {
      this.favorites = [];
    }
  

    abstract addFavorite(item: string): void;
  

    getFavorites(): string[] {
      return this.favorites;
    }
  }
  
  class MoviesFavoriteManager extends FavoriteManager {
    constructor() {
      super();
    }
  

    addFavorite(item: string): void {
      if (!this.favorites.includes(item)) {
        this.favorites.push(item);
      } else {
        console.log(`O filme "${item}" já está na lista de favoritos.`);
      }
    }
  
    getFavorites(): string[] {
      return this.favorites.sort();
    }
  }
  
  class BooksFavoriteManager extends FavoriteManager {
    constructor() {
      super();
    }
  

    addFavorite(item: string): void {
      this.favorites.unshift(item);
    }
  }
  
  
  const movieManager = new MoviesFavoriteManager();
  movieManager.addFavorite("Inception");
  movieManager.addFavorite("The Dark Knight");
  movieManager.addFavorite("Inception"); // Tarefa duplicada
  movieManager.addFavorite("Interstellar");
  
  console.log("Lista de Filmes Favoritos (ordenada):");
  console.log(movieManager.getFavorites());
  
  const bookManager = new BooksFavoriteManager();
  bookManager.addFavorite("1984");
  bookManager.addFavorite("To Kill a Mockingbird");
  bookManager.addFavorite("Moby Dick");
  bookManager.addFavorite("Brave New World");
  
  console.log("Lista de Livros Favoritos (inicializando no início):");
  console.log(bookManager.getFavorites());