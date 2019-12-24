import { Controller, Get } from '@nestjs/common';

@Controller('contacts')
export class ContactsController {
    @Get()
    index(): string {
        return 'esta rota retorna os contatos'
    }
}
