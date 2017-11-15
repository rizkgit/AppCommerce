import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ProductDetailsComponent } from '../product-details/product-details';


@Component({
  selector: 'category-products',
  templateUrl: 'category-products.html'
})
export class CategoryProductsComponent {

  page = 1;
  category = null;
  MoreProducts$ = [];
  
  constructor(public navParams: NavParams, public api: ApiProvider,public toastCtl: ToastController, public navCtrl: NavController) {
    this.category = this.navParams.get("cat");
    this.page = this.navParams.get("page");
  }

  ionViewDidLoad(){
    this.getMoreProducts(null);
  }

  getMoreProducts(event){
    if (event == null)
    {
      this.page = 1;
      this.MoreProducts$ = [];
    }
    else
    {
      this.page +=1;
    }
    
    this.api.getCategoryProducts(this.category.CATEGORY_ID,this.page).subscribe((data)=>{
      if (data != null){
        data.forEach(element => {
          this.MoreProducts$.push(element);
        });
      } 
      if (event != null){
        event.complete();      
      }

      if (data.length < 5){
        event.enable(false);
        this.toastCtl.create({
          message:'No More Products',
          duration :2000
        }).present();
      }
      
    });
  }

  poceedToProductDetails(product){
    this.navCtrl.push(ProductDetailsComponent,{'product':product});
  }

}
