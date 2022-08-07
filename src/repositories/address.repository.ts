import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbpostgresqlDataSource} from '../datasources';
import {Address, AddressRelations} from '../models';

export class AddressRepository extends DefaultCrudRepository<
  Address,
  typeof Address.prototype.address_id,
  AddressRelations
> {
  constructor(
    @inject('datasources.dbpostgresql') dataSource: DbpostgresqlDataSource,
  ) {
    super(Address, dataSource);
  }
}
