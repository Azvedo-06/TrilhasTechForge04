/*class EmailSender {
    sendEmail(contact: string): void {
        if (this.validateEmail(contact)) {
            console.log(`Enviando e-mail para: ${contact}...`);
        } else {
            console.log(`E-mail inválido: ${contact}`);
        }
    }

    validateEmail(email: string): boolean {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }
}*/

// refatoração
class ContactValidator {
    validate(email: string): boolean {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }
}

class EmailSender {
    private contactValidator: ContactValidator;

    constructor(contactValidator: ContactValidator) {
        this.contactValidator = contactValidator;
    }

    sendEmail(contact: string): void {
        if (this.contactValidator.validate(contact)) {
            console.log(`Enviando e-mail para: ${contact}...`);
        } else {
            console.log(`E-mail inválido: ${contact}`);
        }
    }
}

const contactValidator = new ContactValidator();
const emailSender = new EmailSender(contactValidator);

emailSender.sendEmail("contato@exemplo.com");
emailSender.sendEmail("contato@exemplo");
