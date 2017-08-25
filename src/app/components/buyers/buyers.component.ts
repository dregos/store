import { Component, OnInit } from '@angular/core';
import { BuyersService } from '../../shared/services/buyers.service';
import { Buyer } from './buyer';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../products/product';

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html'
})
export class BuyersComponent {

  private buyers : Buyer[] = [];
  private searchValue:string = '';
  private newBuyer: Buyer = new Buyer(null,'', '', '');

  constructor(private buyersService: BuyersService,
              private productsService: ProductsService) {
    this.buyers = buyersService.getBuyers();
  }

  remove(buyer){
    this.buyers = this.buyersService.removeBuyer(buyer);
  }

  add(){
    this.buyersService.addBuyer(this.newBuyer);
    this.newBuyer = new Buyer(null,'', '', '');
  }

  removeOneProduct(product){
    this.productsService.removeOneProduct(product);
  }

  addOneProduct(product){
    this.productsService.addOneProduct(product);
  }

}
