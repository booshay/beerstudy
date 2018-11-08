import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
 
  constructor(private http: HttpClient) { }
  
 getReviews(beerId){
    
      let data = {
      query:` {beerReviews(beerId:`+beerId+`)
              {items{comment, createdAt, score, scores{appearance, aroma, flavor, mouthfeel, overall},
              author{username, imageUrl, city, state{name, country{name}}}}}
              beer(id:`+beerId+`){
                name, imageUrl, averageRating
              }}`,
      variables:"{}",
      operationName:null
  };
 
   
     return this.http.post('https://api.r8.beer/v1/api/graphql/', data, {
     headers:{
     'x-api-key': 'yo5e6HwJhh4xzYm1uTUO9mdHTmAQ6TL7w5wfMNNg'}
    });
 }
  
}

//items{comment, score, scores{appearance, aroma, flavor, mouthfeel, overall},author{username, city, state{name,code, country{name}}}}
