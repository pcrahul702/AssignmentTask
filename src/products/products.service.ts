import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { CreateProductDto } from 'src/Dto/products.dto';

@Injectable()
export class ProductsService {
  private readonly productRepo = './db.json';
  getProduct() {
    try {
      const products = fs.readFileSync(this.productRepo, 'utf-8');
      return JSON.parse(products);
    } catch (error) {
      console.error('Error reading or parsing db.json:', error.message);
      throw new Error('Failed to retrieve products from the database.');
    }
  }
  getoneProduct(id) {
    try {
      const products = fs.readFileSync(this.productRepo, 'utf-8');
      const allproducts = JSON.parse(products);
      const item = allproducts.filter((item) => item.id == id);
      return item;
    } catch (error) {
      console.error('Error reading or parsing db.json:', error.message);
      throw new Error('Failed to retrieve products from the database.');
    }
  }
  addproduct(body: CreateProductDto) {
    try {
      const products = JSON.parse(fs.readFileSync(this.productRepo, 'utf-8'));
      const newProductId = Math.floor(Math.random() * 100);
      const payload={
        id:newProductId,...body
      }
      products.push(payload);
      fs.writeFileSync(this.productRepo, JSON.stringify(products), 'utf-8');
      return payload;
    } catch (error) {
      console.log("error",error);
      throw new Error(error.message);
    }
  }
  deleteProduct(id){
    try {
        const allproducts = JSON.parse(fs.readFileSync(this.productRepo, 'utf-8'));
        // console.log(allproducts)
        const index = allproducts.findIndex((item:any) => item.id == id);
        console.log(index)
        if (index !== -1) {
            allproducts.splice(index, 1);
            // console.log(allproducts)
            fs.writeFileSync(this.productRepo, JSON.stringify(allproducts), 'utf-8');
            return `Product delete successfully on Id ${id}` ;
        }
        return `Product Not found on Id ${id}`;
      } catch (error) {
        console.error(error.message);
        throw new Error(error.message);
      }
  }
  updateProduct(id,body:CreateProductDto){
    try {
        const allproducts = JSON.parse(fs.readFileSync(this.productRepo, 'utf-8'));
        const index = allproducts.findIndex((item:any) => item.id == id);
        if (index !== -1) {
          const currentitem=allproducts[index]
            allproducts[index]={...currentitem,...body};
            fs.writeFileSync(this.productRepo, JSON.stringify(allproducts), 'utf-8');
            return `Product Updated successfully on Id ${id}` ;
        }
        return `Product Not found on Id ${id}`;
      } catch (error) {
        console.error(error.message);
        throw new Error(error.message);
      }
  }
}
