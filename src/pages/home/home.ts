import { Component } from '@angular/core';
import { FoodsProvider } from '../../providers/foods/foods';
import {ListFood, Food} from "../../model/food";
import { NavController } from 'ionic-angular';
import {DetailFoodPage} from "../detail-food/detail-food";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private AllFood: ListFood;

  constructor(public navCtrl: NavController, private foodsProvider: FoodsProvider) {

    foodsProvider.getJsonFile()
      .subscribe((foods: ListFood) => { this.AllFood = foods; });
  }

  openDetail(item: Food) {
    this.navCtrl.push(DetailFoodPage, {item: item});
  }
}
