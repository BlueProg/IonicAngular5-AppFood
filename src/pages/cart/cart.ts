import {Component, OnDestroy, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {ItemsOrderProvider, orderFood} from "../../providers/items-order/items-order";
import {DetailFoodPage} from "../detail-food/detail-food";
import {Food} from "../../model/food";

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage implements OnInit, OnDestroy {

  private refOrder$: any;
  private orderFoods: orderFood[];

  constructor(public navCtrl: NavController,private itemOrder: ItemsOrderProvider) {
  }

  openDetail(item: Food) {
    this.navCtrl.push(DetailFoodPage, {item: item});
  }

  ngOnInit(): void {
    this.refOrder$ = this.itemOrder.dataS
      .subscribe((data: orderFood[]) => {
      this.orderFoods = data;
    });
  }

  ngOnDestroy(): void {
    this.refOrder$.unsubscribe();
  }

}
