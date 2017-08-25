import { Component, OnInit } from '@angular/core';
import { BuyersService } from '../../shared/services/buyers.service';
import { Buyer } from './buyer';


@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html'
})
export class BuyersComponent {

  private buyers : Buyer[] = [];
  private searchValue:string = '';

  constructor(private buyersService: BuyersService) {
    this.buyers = buyersService.getBuyers();
  }

  remove(buyer){
    this.buyersService.removeBuyer(buyer);
  }

  add(){
    //this.buyersService.addBuyer(0,'','','','','');
  }

}
