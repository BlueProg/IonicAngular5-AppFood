
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import { catchError, pluck } from 'rxjs/operators';
import { of } from "rxjs/observable/of";

import { ListFood } from "../../model/food";

@Injectable()
export class FoodsProvider {

	private backUrl = 'api/food';

	constructor(public http: HttpClient) {
	}

	getJsonFile() : Observable<ListFood> {
    return this.http.get("./assets/file.json")
      .pipe(
        pluck('categories'),
        catchError(err => {console.log(err); return of(null)})
      );
  }
}
