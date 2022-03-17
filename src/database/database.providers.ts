import { constants } from '../config/constants';
import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: constants.POSTGRES_URL,
        port: 5432,
        username: constants.POSTGRES_USER,
        password: constants.POSTGRES_PASSWORD,
        database: constants.POSTGRES_DB,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
];
