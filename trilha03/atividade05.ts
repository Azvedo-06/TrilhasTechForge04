
abstract class Funcionario {
    private nome: string;
    private salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    abstract calcularBonus(): number;

    getSalario(): number {
        return this.salario;
    }

    getNome(): string {
        return this.nome;
    }
}

class Gerente extends Funcionario {
    constructor(nome: string, salario: number) {
        super(nome, salario);
    }

    calcularBonus(): number {
        return this.getSalario() * 0.10;
    }
}

class Operario extends Funcionario {
    constructor(nome: string, salario: number) {
        super(nome, salario);
    }


    calcularBonus(): number {
        return this.getSalario() * 0.05;
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): number {
    let totalSalarioComBonus = 0;

    for (let funcionario of funcionarios) {
        let bonus = funcionario.calcularBonus();
        let salarioFinal = funcionario.getSalario() + bonus;
        totalSalarioComBonus += salarioFinal;

        console.log(`${funcionario.getNome()} - Salário com bônus: R$ ${salarioFinal.toFixed(2)}`);
    }

    return totalSalarioComBonus;
}

const gerente1 = new Gerente("Carlos", 5000);
const operario1 = new Operario("Ana", 2000);
const operario2 = new Operario("João", 2500);

const funcionarios: Funcionario[] = [gerente1, operario1, operario2];

const total = calcularSalarioComBonus(funcionarios);
console.log(`\nTotal de salários com bônus: ${total.toFixed(2)} R$`);