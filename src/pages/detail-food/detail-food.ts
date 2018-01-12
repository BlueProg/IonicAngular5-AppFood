import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   // console.log("instance aussi");
   // console.log(navParams.get('item'));
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad DetailFoodPage');
  }

}
