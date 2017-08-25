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
  private newBuyer: Buyer = new Buyer(null,'', '', '');

  constructor(private buyersService: BuyersService) {
    this.buyers = buyersService.getBuyers();
  }

  remove(buyer){
    this.buyersService.removeBuyer(buyer);
  }

  add(){
    this.buyersService.addBuyer(this.newBuyer);
    this.newBuyer = new Buyer(null,'', '', '');
  }

}
