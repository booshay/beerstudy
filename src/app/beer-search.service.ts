import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as Rx from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerSearchService {

  private _beers = new Rx.BehaviorSubject (null);

  constructor(private http: HttpClient) { }


  searchBeer(name: string) {

    const data = {
      query: `{beerSearch(query:"` + name + `"){items{id, name, style {description}, description, overallScore,
       imageUrl, abv, brewer {name, facebook, web}}}}`,
      variables: '{}',
      operationName: null
    };

    return this.http.post('https://api.r8.beer/v1/api/graphql/', data, {
      headers: {'x-api-key': 'yo5e6HwJhh4xzYm1uTUO9mdHTmAQ6TL7w5wfMNNg'}
    }).subscribe(data => {
      this._beers.next(data);
    });
}

get beers$() {
  return this._beers.asObservable();
}
}
