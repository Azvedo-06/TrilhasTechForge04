abstract class FiguraGeometrica {
    abstract calcularArea(): number;
  }
  
  class Circulo extends FiguraGeometrica {
    private raio: number;
    constructor(raio: number) {
      super();
      this.raio = raio;
    }
  
    calcularArea(): number {
      return Math.PI * Math.pow(this.raio, 2); 
    }
  }
  
  class Quadrado extends FiguraGeometrica {
    private lado: number;
  
    constructor(lado: number) {
      super();
      this.lado = lado;
    }
  
    calcularArea(): number {
      return Math.pow(this.lado, 2); 
    }
  }
  
  class Triangulo extends FiguraGeometrica {
    private base: number;
    private altura: number;
  
    constructor(base: number, altura: number) {
      super();
      this.base = base;
      this.altura = altura;
    }
  
    
    calcularArea(): number {
      return (this.base * this.altura) / 2; 
    }
  }
  
  function imprimirAreas(figuras: FiguraGeometrica[]): void {
    figuras.forEach(figura => {
      console.log(`A área da figura ${figura.constructor.name} é: ${figura.calcularArea().toFixed(2)}`);
    });
  }
  
  const circulo = new Circulo(5);
  const quadrado = new Quadrado(4);
  const triangulo = new Triangulo(4, 3);
  
  const figuras: FiguraGeometrica[] = [circulo, quadrado, triangulo];
  imprimirAreas(figuras);