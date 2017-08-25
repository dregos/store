import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../products/product';

import { BuyersService } from '../../shared/services/buyers.service';
import { Buyer } from '../buyers/buyer';

@Component({
  selector: 'app-selling',
  templateUrl: './selling.component.html'
})
export class SellingComponent implements OnInit {

  private product: Product = new Product(null, '',null);
  private buyer: Buyer = new Buyer(null, '','','')
  private buyers: Buyer[] = [];

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              private buyersService: BuyersService) {
      this.buyers = this.buyersService.getBuyers();
  }

  ngOnInit() {
  	this.route.params.subscribe(()=>{
  		let id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.product = this.productsService.getProductById(id);
  	});
  }


}
