import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
   private customers: Customer[] = [
        { id: 1, name: 'John Doe', email: 'john.doe@example'},
        { id: 2, name: 'Ali Doe', email: 'Alidoe@example'},
        { id: 3, name: 'Sam Doe', email: 'Samdoe@example'},
    ];

    findCustomerById(id: number){
        return this.customers.find((user) => user.id === id);
    }

    createCustomer(customerdto:CreateCustomerDto){
        this.customers.push(customerdto);
    }

    getCustomers(){
        return this.customers;
    }
}
