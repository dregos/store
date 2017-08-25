import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product';
import { ProductsService } from '../../shared/services/products.service';

export class Buyer {
  public id : number;
  public first_name : string;
  public  last_name: string;
  private email : string;
  private products : Product[] = [];

  private productsService : ProductsService;

  constructor(id, first_name, last_name, email) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    //this.generateSomeBuys();
  }

  public generateSomeBuys(){
    this.products.push(new Product(0,'Flip flops', 1),);
    this.products.push(new Product(1,'Skateboard', 2));
  }

}
