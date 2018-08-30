import {Injectable} from '@angular/core';
import {PreloadingStrategy, Route} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class SelectivePreloadingStrategyServiceService
  implements PreloadingStrategy {

  constructor() {
  }


  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      return fn();
    } else {
      return of(null);
    }
  }

}
