import { Injectable } from '@angular/core';

import { Food } from "../../model/food";
import 'rxjs/add/observable/of';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import "rxjs/add/operator/do";

/*
  Generated class for the ItemsOrderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export interface orderFood {
  count: number;
  item: Food;
}

@Injectable()
export class ItemsOrderProvider {

  private dataStore: orderFood[];
  private _dataS: BehaviorSubject<orderFood[]>;

  constructor() {
    this.dataStore = [];
    this._dataS = <BehaviorSubject<orderFood[]>>new BehaviorSubject([]);
  }

  get dataS() {
    return this._dataS.asObservable();
  }

  loadAll() {
    this._dataS.next(Object.assign([], this.dataStore));
  }

  majItems(orderItem: orderFood) {
    if (this.dataStore.length > 0) {
      for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i].item.id == orderItem.item.id) {
          this.dataStore[i].count = orderItem.count;
          if (this.dataStore[i].count == 0) {
            this.dataStore.splice(i, 1);
          }
          this._dataS.next(Object.assign([], this.dataStore))
          return;
        }
      }

      this.dataStore.push(orderItem);
      this._dataS.next(Object.assign([], this.dataStore))
      return;
    }
    this.dataStore.push(orderItem);
    this._dataS.next(Object.assign([], this.dataStore))
    return;
  }
}
