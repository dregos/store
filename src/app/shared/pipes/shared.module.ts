import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { BuyersService } from '../services/buyers.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	FilterPipe
  ],
  providers:[
    BuyersService
  ],
  exports: [
  	FilterPipe,
  ]
})
export class SharedModule { }
