///<reference path="../../providers/items-order/items-order.ts"/>
import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ItemsOrderProvider, orderFood} from "../../providers/items-order/items-order";
import {Food} from "../../model/food";
import "rxjs/add/operator/reduce";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/filter";

/**
 * Generated class for the ButtonOrderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'button-order',
  templateUrl: 'button-order.html'
})
export class ButtonOrderComponent implements OnInit, OnDestroy {

  refOrderFlux$ : any;
  count: number = 0;

  @Input() foodItem: Food;
  @Input() visual: String = "base";

  ngOnInit(): void {

    this.refOrderFlux$ = this.itemOrderProvider.dataS
      .filter((data: orderFood[]) => Object.keys(data).length > 0)
      .flatMap(x => x)
      .filter((data: orderFood) => data.item.id == this.foodItem.id)
      .subscribe((data) => {
        this.foodItem = data.item;
        this.count = data.count;
      });
  }

  constructor(private itemOrderProvider: ItemsOrderProvider) {

  }

  removeOne() {
    if (this.count > 0)
      this.majCommandOrder(this.count - 1);
  }

  addOne() {
    this.majCommandOrder(this.count + 1);
  }

  majCommandOrder(count: number) {
    this.itemOrderProvider.majItems({"count": count, "item": this.foodItem});
  }

  ngOnDestroy(): void {
    this.refOrderFlux$.unsubscribe();
  }
}
