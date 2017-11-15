import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';


@Component({
  selector: 'product-details',
  templateUrl: 'product-details.html'
})
export class ProductDetailsComponent {
  product:any;
  ProductImages$;
  ProductReviews$;
  constructor(public navParams: NavParams, public api: ApiProvider) {
    this.product = this.navParams.get('product');
    console.log(this.product);
    this.ProductImages$ = this.api.getProductImages(this.product.PRODUCT_ID);
    this.ProductReviews$ = this.api.getProductReviews(this.product.PRODUCT_ID);
  }

}
