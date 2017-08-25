import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { BuyersService } from '../services/buyers.service';
import { ProductsService } from '../services/products.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	FilterPipe
  ],
  providers:[
    BuyersService,
    ProductsService
  ],
  exports: [
  	FilterPipe,
  ]
})
export class SharedModule { }
