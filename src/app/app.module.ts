import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { MenuComponent } from '../components/menu/menu';
import { HomeComponent } from '../components/home/home';
import { ApiProvider } from '../providers/api/api';
import { CategoryProductsComponent } from '../components/category-products/category-products';
import { ProductDetailsComponent } from '../components/product-details/product-details';

@NgModule({
  declarations: [
    MyApp,
    MenuComponent,
    HomeComponent,
    CategoryProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuComponent,
    HomeComponent,
    CategoryProductsComponent,
    ProductDetailsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}
