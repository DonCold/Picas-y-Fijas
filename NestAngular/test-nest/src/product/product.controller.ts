import {
  Controller,
  HttpStatus,
  Res,
  Body,
  Get,
  Post,
  Param,
  NotFoundException,
  Delete,
  Put,
} from '@nestjs/common';

import { ProductService } from './product.service';

import { Product } from './interfaces/product.interfaces';
import { CreateProductDTO } from './dto/product.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('/')
  async createPost(
    @Res() res,
    @Body() createProductDTO: CreateProductDTO,
  ): Promise<Product> {
    const product = await this.productService.createProduct(createProductDTO);

    return res.status(HttpStatus.OK).json({
      message: 'Product Successfully Created',
      data: product,
    });
  }

  @Get('/')
  async getProducts(@Res() res): Promise<Product[]> {
    const products = await this.productService.getProducts();

    return res.status(HttpStatus.OK).json({
      message: 'Get Products Successfully',
      data: products,
    });
  }

  @Get('/:productID')
  async getProduct(
    @Res() res,
    @Param('productID') productID: string,
  ): Promise<Product> {
    const product = await this.productService.getProduct(productID);

    if (!product) throw new NotFoundException('Product does not exists');

    return res.status(HttpStatus.OK).json({
      message: 'Get Product Successfully',
      data: product,
    });
  }

  @Delete('/:productID')
  async deleteProduct(
    @Res() res,
    @Param('productID') productID: string,
  ): Promise<Product> {
    const product = await this.productService.deleteProduct(productID);

    if (!product) throw new NotFoundException('Product does not exists');

    return res.status(HttpStatus.OK).json({
      message: 'Delete Product Successfully',
      data: product,
    });
  }

  @Put('/:productID')
  async editProduct(
    @Res() res,
    @Param('productID') productID: string,
    @Body() editProductDTO: CreateProductDTO,
  ): Promise<Product> {
    const product = await this.productService.updateProduct(
      productID,
      editProductDTO,
    );

    if (!product) throw new NotFoundException('Product does not exists');

    return res.status(HttpStatus.OK).json({
      message: 'Edit Product Successfully',
      data: product,
    });
  }
}
