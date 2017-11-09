import { Component } from '@angular/core';
import { HomeComponent } from '../home/home';
import { ApiProvider } from '../../providers/api/api';
import { Observable } from 'rxjs/Observable';
import { NavController } from 'ionic-angular';
import { CategoryProductsComponent } from '../category-products/category-products';

@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {
  rootPage = HomeComponent;
  RootCategories$;
  
  constructor(public api: ApiProvider,public navCtrl: NavController) {
    
  }
  ionViewDidLoad(){
   this.RootCategories$ = this.api.getRootCategories();
  }

  openCatProducts(cat){
      this.navCtrl.push(CategoryProductsComponent,{'cat':cat,'page':1});
  }

}
