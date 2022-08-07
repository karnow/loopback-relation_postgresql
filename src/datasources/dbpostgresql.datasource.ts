import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const DATABASE_URL = 'postgres://postgres:konsola28@localhost';
// postgres://username:password@localhost/database

const config = {
  name: 'dbpostgresql',
  connector: 'postgresql',
  url: DATABASE_URL,
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'konsola28',
  database: 'bucket',
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbpostgresqlDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'dbpostgresql';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.dbpostgresql', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
