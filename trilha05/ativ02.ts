abstract class Inventory {
    
    protected inventory: Record<string, number>

    constructor() {
        this.inventory = {};
    }

    abstract addItem(item: string, quantity: number): void
    abstract removeItem(item: string): void
    
    getInventory(): Record<string, number> {
        return  this.inventory;
    } 


};

class WarehouseInventory extends Inventory {
    constructor() {
        super()
    }

    addItem(item: string, quantity: number): void {
        if(this.inventory[item]) {
            this.inventory[item] += quantity;
        } else {
            this.inventory[item] = quantity;
        }
    }

    removeItem(item: string): void {
        if (this.inventory[item]) {
            delete this.inventory[item];
        } else {
            console.log(`Item "${item}" não foi encontrado no inventário.`);
        }
    }
}

class StoreInventory extends Inventory {

     private readonly quantity_max: number = 10;

    constructor() {
        super()
    }

    addItem(item: string, quantity: number) {
        if (this.inventory[item]) {
            if(this.inventory[item] + quantity > this.quantity_max ) {
                console.log(`item ${item} não pode ser adicioanado pois sua quantida e maior que 10, quantida: ${quantity}`);
            }
        } else {
            this.inventory[item] += quantity;
        }

        if (quantity > this.quantity_max) {
        console.log(`não é possível adicionar ${quantity} unidades de "${item}" limite de 10 unidades por item.`);
      } else {
        this.inventory[item] = quantity;
      }
    }

    removeItem(item: string): void {
        if(this.inventory[item]) {
            delete this.inventory[item];
        } else {
            console.log(`Item "${item}" não encontrado no inventário.`);
        }
    }
}

const ItemCasa = new WarehouseInventory();

ItemCasa.addItem("café", 1);
ItemCasa.addItem("arroz", 5);
ItemCasa.addItem("açucar", 21);

console.log(ItemCasa.getInventory());

const ItemLoja = new StoreInventory();

ItemLoja.addItem("camisa preta", 5);
ItemLoja.addItem("calça cargo", 8);
ItemLoja.addItem("Oculos de sol", 32);

console.log(ItemLoja.getInventory());