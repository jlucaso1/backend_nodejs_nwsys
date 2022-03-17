import { Connection } from 'typeorm';
import { Product } from './entities/product.entity';

export const productProviders = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Product),
    inject: ['DATABASE_CONNECTION'],
  },
];