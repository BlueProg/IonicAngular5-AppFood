import {Component, OnInit} from '@angular/core';
import {ItemsOrderProvider, orderFood} from "../../providers/items-order/items-order";
import {Observable} from "rxjs/Observable";
//import "rxjs/add/operator/reduce";
import "rxjs/add/operator/scan";


/**
 * Generated class for the TotalOrderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'total-order',
  templateUrl: 'total-order.html'
})
export class TotalOrderComponent implements OnInit{

  total: number;
  refOrderFlux2: any;

  constructor(private itemOrderProvider: ItemsOrderProvider) {
    console.log('Hello TotalOrderComponent Component');
    this.total = 0;

  }

  ngOnInit(): void {

    this.refOrderFlux2 = this.itemOrderProvider.dataS
   //   .filter((data: orderFood[]) => )
      .subscribe((data: orderFood[]) => {

        if (Object.keys(data).length > 0)
          this.total = data.reduce((acc: number, currentValue: orderFood) => acc + (currentValue.count * currentValue.item.price), 0);
        else
          this.total = 0;
      })
  }

  test() {

  }
}
