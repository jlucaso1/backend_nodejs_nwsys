import { Controller, Get, Param, Query } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';

@Controller('manager/products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Product> {
    return this.productService.findOne(id);
  }
}
