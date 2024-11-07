class Veiculo {
    mover() {
         console.log("O veículo está se movendo");
    }
 };
 
 class Carro extends Veiculo {
     mover() {
         console.log("O Carro está se movendo");
     }
 };
 
 class Bike extends Veiculo {
     mover() {
         console.log("A Bike está se movendo")
     }
 };
 
 const minhaBike = new Bike;
 minhaBike.mover();
 const meuCarro = new Carro; 
 meuCarro.mover();