import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { DataMock } from './data-mock';

import { HomePage } from '../pages/home/home';
import { DetailFoodPage } from "../pages/detail-food/detail-food";
import { ButtonOrderComponent } from "../components/button-order/button-order";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FoodsProvider } from '../providers/foods/foods';
import {TotalOrderComponent} from "../components/total-order/total-order";
import { ItemsOrderProvider } from '../providers/items-order/items-order';
import {TabsPage} from "../pages/tabs/tabs";
import {CartPage} from "../pages/cart/cart";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailFoodPage,
    ButtonOrderComponent,
    TotalOrderComponent,
    TabsPage,
    CartPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailFoodPage,
    TabsPage,
    CartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataMock,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FoodsProvider,
    ItemsOrderProvider
  ]
})
export class AppModule {}
