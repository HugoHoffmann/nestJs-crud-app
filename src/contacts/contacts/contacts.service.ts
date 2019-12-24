import { Injectable } from '@nestjs/common';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from '../contact.entity'

@Injectable()
export class ContactsService {
    constructor(
        @InjectRepository(Contact)
        private contactRepository: Repository<Contact>,
    ) {}

    async  findAll(): Promise<Contact[]> {
        return await this.contactRepository.find();
    }

    async  create(contact: Contact): Promise<Contact> {
        return await this.contactRepository.save(contact);
    }

    async update(contact: Contact): Promise<UpdateResult> {
        return await this.contactRepository.update(contact.id, contact);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.contactRepository.delete(id);
    }
}
