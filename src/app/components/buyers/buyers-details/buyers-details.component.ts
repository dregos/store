import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BuyersService } from '../../../shared/services/buyers.service';
import { Buyer } from '../buyer';

@Component({
  selector: 'app-buyers-details',
  templateUrl: './buyers-details.component.html'
})
export class BuyersDetailsComponent implements OnInit {

  private buyer: Buyer = new Buyer(null, '','','');

  constructor(private route: ActivatedRoute,
              private contactsService: BuyersService) {
  }

  ngOnInit() {
  	this.route.params.subscribe(()=>{
  		let id = parseInt(this.route.snapshot.paramMap.get('id'));
      //console.log('Buyer id :'+id);
      this.buyer = this.contactsService.getBuyerById(id);
  	});
  }

}
