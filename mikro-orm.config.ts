import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { PostgreSqlDriver } from '@mikro-orm/postgresql'; // Import the PostgreSQL driver

const config: MikroOrmModuleOptions = {
  entities: ['./dist/entities'], // Path to compiled entities
  entitiesTs: ['./src/entities'], // Path to TypeScript entities
  dbName: 'my_database',          // Replace with your database name
  user: 'postgres',               // Replace with your database user
  password: 'password',           // Replace with your database password
  metadataProvider: TsMorphMetadataProvider,
  driver: PostgreSqlDriver,       // Use the PostgreSQL driver class here
};

export default config;
