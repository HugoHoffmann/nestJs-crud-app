import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Contact } from '../contact.entity';
import { ContactsService } from '../contacts/contacts.service';

@Controller('contacts')
export class ContactsController {
    constructor(private contactService: ContactsService){}

    @Get()
    index(): Promise<Contact[]> {
        return this.contactService.findAll();
    }

    @Post('create')
    async create(@Body() contactData: Contact): Promise<any> {
        return this.contactService.create(contactData)
    }
   
}
