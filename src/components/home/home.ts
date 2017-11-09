import { Component } from '@angular/core';
import { ApiProvider } from '../../providers/api/api';
import { Observable } from 'rxjs/Observable';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the HomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {

  FeaturedProducts$ = [];
  MoreProducts$ = [];
  page = 0;
  constructor(public api: ApiProvider,public toastCtl: ToastController) {
  }

  ionViewDidLoad() {
    this.getFeaturedProducts();
    this.getMoreProducts(null);
  }

  getFeaturedProducts(){
   
    this.api.getFeaturedProducts().subscribe((data)=>{
      
      if (data != null){
        data.forEach(element => {
          console.log(element.img);
        });
      }
      this.FeaturedProducts$ = data;

    });
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
    this.api.getProducts(this.page).subscribe((data)=>{
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

}
