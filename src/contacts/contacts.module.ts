import { Module } from '@nestjs/common';
import { ContactsService } from './contacts/contacts.service';

@Module({
  providers: [ContactsService]
})
export class ContactsModule {}
