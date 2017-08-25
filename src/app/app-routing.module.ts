import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuyersComponent } from './components/buyers/buyers.component';
import { BuyersDetailsComponent } from './components/buyers/buyers-details/buyers-details.component';
import { ProductsComponent } from './components/products/products.component';

import { SellingComponent } from './components/selling/selling.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/buyers',
    pathMatch: 'full'
  },
  {
    path: 'buyers',
    component: BuyersComponent
  },
  {
    path: 'buyers/:id',
    component: BuyersDetailsComponent,
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'products/:id',
    component: SellingComponent,
  },
];

@NgModule({
	imports: [
		RouterModule.forRoot(
	      appRoutes
	    )
	],
	exports:[
		RouterModule
	]
})

export class AppRoutingModule {

}
