import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeerSearchService {

  constructor(private http: HttpClient) { }

  searchBeer(){
   
    let data= {
      query: `{beerSearch(query:"coors"){items{id, name, style {description}, description, overallScore,
       imageUrl, abv, brewer {name, facebook, web}}}}`,
      variables:"{}",
      operationName:null
    }

    return this.http.post('https://api.r8.beer/v1/api/graphql/', data, {
      headers:{
         'x-api-key': 'yo5e6HwJhh4xzYm1uTUO9mdHTmAQ6TL7w5wfMNNg'}
        });
  }

}
