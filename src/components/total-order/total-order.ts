import {Component, OnInit} from '@angular/core';
import {ItemsOrderProvider, orderFood} from "../../providers/items-order/items-order";
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
  refOrderFlux$: any;

  constructor(private itemOrderProvider: ItemsOrderProvider) {
    this.total = 0;

  }

  ngOnInit(): void {

    this.refOrderFlux$ = this.itemOrderProvider.dataS
      .subscribe((data: orderFood[]) => {
        if (Object.keys(data).length > 0)
          this.total = data.reduce((acc: number, currentValue: orderFood) => acc + (currentValue.count * currentValue.item.price), 0);
        else
          this.total = 0;
      })
  }
}
