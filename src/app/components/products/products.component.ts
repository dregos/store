import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {

  private products : Product[] = [];
  private searchValue:string = '';
  private newProduct: Product = new Product(null,'', null);

  constructor(private productsService: ProductsService) {
    this.products = productsService.getProducts();
  }

  remove(product){
    this.productsService.removeProduct(product);
  }

  add(){
    this.productsService.addProduct(this.newProduct);
    this.newProduct = new Product(null,'', null);
  }

}
