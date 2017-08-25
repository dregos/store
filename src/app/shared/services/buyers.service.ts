import { Injectable } from '@angular/core';
import { Buyer } from '../../components/buyers/buyer'
import { Product } from '../../components/products/product';

@Injectable()
export class BuyersService {

  private buyers: Buyer[] = [];
  private buyer:Buyer = new Buyer(null, '','','');
  private products: Product[] = [];

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
    const index = this.buyers.findIndex((b) => {
      return buyer.id === b.id;
    });
    this.buyers = this.buyers.filter(b => {
      return buyer.id != b.id;
    });
    return this.buyers;
  }

  public buyProduct(buyer, product){
    return buyer.products.push(product);
  }
}
