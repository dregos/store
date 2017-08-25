import { Injectable } from '@angular/core';
import { Product } from '../../components/products/product';


@Injectable()
export class ProductsService {


  private products: Product[] = [];
  private product: Product = new Product(null,'', null);
  //private product:product = new product(null, '','','');

  constructor() {
    this.products = [
      new Product(0,'Flip flops', 10),
      new Product(1,'Skateboard', 10),
      new Product(2,'Basketball', 10),
      new Product(3,'Bike', 10)
    ];
  }

  public getProducts(){
    return this.products
  }

  public getProductById(id){
    this.product = this.products.find(product => product['id'] == id);
    console.log('Found product :' + this.product.id);
    return this.product;
  }

  public addProduct(product){
    const index = this.products.length-1;
    let lastProduct:Product = this.products[index];
    product.id = lastProduct.id + 1;
    this.products.push(product);
    this.product = new Product(null, '',null);
	}

  public removeProduct(product){
    const index = this.products.findIndex((p) => {
      return product.id === p.id;
    });
    this.products = this.products.filter(p => {
      return product.id != p.id;
    });
    return this.products;
  }

  public addOneProduct(product){
    product.quantity = product.quantity+1;
  }

  public removeOneProduct(product){
    product.quantity = product.quantity-1;
  }
}
