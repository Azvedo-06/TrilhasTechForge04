/*class UserManager {
    private users: { name: string, email: string }[] = [];

    createUser(name: string, email: string): void {
        const user = { name, email };
        this.users.push(user);
        console.log(`Usuário ${name} criado com sucesso!`);
        
    
        this.sendEmailNotification(user.email);
    }

    sendEmailNotification(email: string): void {
        console.log(`Enviando notificação para ${email}...`);
    }
}
*/
//implementação 

class EmailNotification {
    send(email: string): void {
        // Simula o envio de um e-mail
        console.log(`Enviando notificação para ${email}...`);
    }
}

class UserManager {
    private users: { name: string, email: string }[] = [];
    private emailNotification: EmailNotification;

    constructor() {
        this.emailNotification = new EmailNotification();
    }

    createUser(name: string, email: string): void {
        const user = { name, email };
        this.users.push(user);
        console.log(`Usuário ${name} criado com sucesso!`);
        
        this.emailNotification.send(user.email);
    }
}