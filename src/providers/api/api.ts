import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  BaseURL = 'http://188.40.50.201:4250/';
  constructor(public http: HttpClient) {}

  getFeaturedProducts() : Observable<any>{
    return this.http.get(this.BaseURL + 'FeaturedProducts');
  }

  getProducts(page: number) : Observable<any>{
    return this.http.post(this.BaseURL + 'Products',{'page':page});
  }

  getRootCategories(): Observable<any>{
    return this.http.get(this.BaseURL + 'RootCategories');
  }

  getCategoryProducts(CATEGORY_ID,page): Observable<any>{
    return this.http.post(this.BaseURL + 'CategoryProducts',{'CATEGORY_ID':CATEGORY_ID, 'page':page});
  }

  getProductImages(PRODUCT_ID): Observable<any>{
    return this.http.post(this.BaseURL + 'ProductImages',{'PRODUCT_ID':PRODUCT_ID});
  }

  getProductReviews(PRODUCT_ID): Observable<any>{
    return this.http.post(this.BaseURL + 'ProductReviews',{'PRODUCT_ID':PRODUCT_ID});
  }
}
