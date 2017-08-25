import { Injectable } from '@angular/core';
import { Buyer } from '../../components/buyers/buyer'


@Injectable()
export class BuyersService {

  private buyers: Buyer[] = [];

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

  public addBuyer(id, first_name, last_name, email){
    return "";
	}

  public removeBuyer(buyer){
    const index = this.buyers.indexOf(buyer);
    this.buyers.splice(index, 1);
  
  }
}
