import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Food } from "../../model/food";

/**
 * Generated class for the DetailFoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-food',
  templateUrl: 'detail-food.html',
})
export class DetailFoodPage {

  private item: Food;

  constructor(public navParams: NavParams) {
    this.item = navParams.get('item');
  }
}
