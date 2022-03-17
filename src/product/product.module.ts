import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { DatabaseModule } from 'src/database/database.module';
import { productProviders } from './product.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...productProviders, ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
