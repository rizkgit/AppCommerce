import { Component, ViewChild } from '@angular/core';
import { HomeComponent } from '../home/home';
import { ApiProvider } from '../../providers/api/api';
import { Observable } from 'rxjs/Observable';
import { NavController } from 'ionic-angular';
import { CategoryProductsComponent } from '../category-products/category-products';
import { ProductDetailsComponent } from '../product-details/product-details';

@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {
  rootPage = HomeComponent;
  RootCategories$;
  @ViewChild('content') navCtrl: NavController;
  
  constructor(public api: ApiProvider) {
    
  }
  ionViewDidLoad(){
   this.RootCategories$ = this.api.getRootCategories();
  }

  openCatProducts(cat){
    this.navCtrl.setRoot(CategoryProductsComponent,{'cat':cat,'page':1});
  }

  openHome(){
    this.navCtrl.setRoot(HomeComponent);
  }

  
}
