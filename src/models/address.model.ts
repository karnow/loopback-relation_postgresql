import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Customer} from './customer.model';

@model()
export class Address extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  address_id?: string;

  @property({
    type: 'string',
    required: true,
  })
  city: string;

  @property({
    type: 'string',
    required: true,
  })
  pincode: string;

  @belongsTo(() => Customer, {name: 'customer'})
  customer_id: number;

  constructor(data?: Partial<Address>) {
    super(data);
  }
}

export interface AddressRelations {
  // describe navigational properties here
}

export type AddressWithRelations = Address & AddressRelations;
