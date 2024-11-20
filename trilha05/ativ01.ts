abstract class TaskManager {
    protected tasks: Set<string>;

    constructor() {
        this.tasks = new Set<string>();
    }

    abstract addTask(task: string): void;

    listTask(): string[] {
        return Array.from(this.tasks);
    };
}

class Project extends TaskManager {
    constructor() {
        super();
    }

    addTask(task: string): void {
        if(!this.tasks.has(task)) {
            this.tasks.add(task);
        } else {
            console.log(`tarefa ${task} já existe`);
        }
        
    }
};

class DailyTasks extends TaskManager {
    constructor() {
        super()
    }

    addTask(task: string): void {
        if(!this.tasks.has(task)) {
            this.tasks.add(task);
        } else {
            console.log(`tarefa ${task} já adicionada`);
        }
    }
        
}

const project = new Project();
project.addTask("Desenvolver funcionalidade A");
project.addTask("Revisar código");
project.addTask("Desenvolver funcionalidade A");

console.log("Tarefas do Projeto:");
console.log(project.listTask());

const dailly = new DailyTasks();

dailly.addTask("tomar café");
dailly.addTask("fofocar");
dailly.addTask("fofocar");

console.log(dailly.listTask());