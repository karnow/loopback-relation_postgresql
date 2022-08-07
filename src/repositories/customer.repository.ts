import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, HasOneRepositoryFactory} from '@loopback/repository';
import {DbpostgresqlDataSource} from '../datasources';
import {Customer, CustomerRelations, Order, Address} from '../models';
import {OrderRepository} from './order.repository';
import {AddressRepository} from './address.repository';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.customer_id,
  CustomerRelations
> {

  public readonly orders: HasManyRepositoryFactory<Order, typeof Customer.prototype.customer_id>;

  public readonly address: HasOneRepositoryFactory<Address, typeof Customer.prototype.customer_id>;

  constructor(
    @inject('datasources.dbpostgresql') dataSource: DbpostgresqlDataSource, @repository.getter('OrderRepository') protected orderRepositoryGetter: Getter<OrderRepository>, @repository.getter('AddressRepository') protected addressRepositoryGetter: Getter<AddressRepository>,
  ) {
    super(Customer, dataSource);
    this.address = this.createHasOneRepositoryFactoryFor('address', addressRepositoryGetter);
    this.registerInclusionResolver('address', this.address.inclusionResolver);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
    this.registerInclusionResolver('orders', this.orders.inclusionResolver);
  }
}
