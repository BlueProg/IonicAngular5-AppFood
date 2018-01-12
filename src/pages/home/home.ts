import { Component, OnInit } from '@angular/core';
import { FoodsProvider } from '../../providers/foods/foods';
import {ListFood, Food} from "../../model/food";
import { NavController } from 'ionic-angular';
import {DetailFoodPage} from "../detail-food/detail-food";
//import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  private AllFood: ListFood;

  constructor(public navCtrl: NavController, private foodsProvider: FoodsProvider) {

    foodsProvider.getJsonFile()
      .subscribe((foods: ListFood) => { this.AllFood = foods; });
  }

  ngOnInit() {
    //console.log("OnInit");
  }

  openDetail(item: Food) {
    //  console.log(item);
    this.navCtrl.push(DetailFoodPage, {item: item});
  }
}
