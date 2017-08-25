import { Injectable } from '@angular/core';
import { Buyer } from '../../components/buyers/buyer'


@Injectable()
export class BuyersService {

  private buyers: Buyer[] = [];
  private buyer:Buyer = new Buyer(null, '','','');

  constructor() {
    this.buyers = [
      new Buyer(0,'John', 'Doe', 'doe@example.com'),
      new Buyer(1,'Daniel', 'Ros', 'ros@example.com'),
      new Buyer(2,'Martin', 'Hess', 'hess@example.com'),
      new Buyer(3,'John', 'Deere', 'deere@example.com')
    ];
  }

  public getBuyers(){
    return this.buyers
  }

  public getBuyerById(id){
    this.buyer = this.buyers.find(buyer => buyer['id'] == id);
    //console.log('Found buyer :' + this.buyer.id);
    return this.buyer;
  }

  public addBuyer(buyer){
    const index = this.buyers.length-1;
    let lastBuyer:Buyer = this.buyers[index];
    buyer.id = lastBuyer.id + 1;
    this.buyers.push(buyer);
    this.buyer = new Buyer(null, '','','');
	}

  public removeBuyer(buyer){
    const index = this.buyers.indexOf(buyer);
    this.buyers.splice(index, 1);

  }
}
