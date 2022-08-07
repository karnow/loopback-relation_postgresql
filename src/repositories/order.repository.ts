import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbpostgresqlDataSource} from '../datasources';
import {Order, OrderRelations} from '../models';

export class OrderRepository extends DefaultCrudRepository<
  Order,
  typeof Order.prototype.order_id,
  OrderRelations
> {
  constructor(
    @inject('datasources.dbpostgresql') dataSource: DbpostgresqlDataSource,
  ) {
    super(Order, dataSource);
  }
}
