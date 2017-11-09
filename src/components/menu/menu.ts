import { Component } from '@angular/core';
import { HomeComponent } from '../home/home';
import { ApiProvider } from '../../providers/api/api';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the MenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {
  rootPage = HomeComponent;
  RootCategories$;
  constructor(public api: ApiProvider) {
    
  }
  ionViewDidLoad(){
   this.RootCategories$ = this.api.getRootCategories();
  }

}
