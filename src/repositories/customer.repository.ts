import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbpostgresqlDataSource} from '../datasources';
import {Customer, CustomerRelations} from '../models';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.customer_id,
  CustomerRelations
> {
  constructor(
    @inject('datasources.dbpostgresql') dataSource: DbpostgresqlDataSource,
  ) {
    super(Customer, dataSource);
  }
}
