import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbpostgresqlDataSource} from '../datasources';
import {Manufacturer, ManufacturerRelations} from '../models';

export class ManufacturerRepository extends DefaultCrudRepository<
  Manufacturer,
  typeof Manufacturer.prototype.manufacturer_id,
  ManufacturerRelations
> {
  constructor(
    @inject('datasources.dbpostgresql') dataSource: DbpostgresqlDataSource,
  ) {
    super(Manufacturer, dataSource);
  }
}
