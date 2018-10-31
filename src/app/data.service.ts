import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
 
getBeer(){

  let data = {
     // query:"{beer(id: "+idNum+") {name,abv,description,imageUrl}}",
      query:"  {topBeers{items{id, name, style {description}, description, overallScore, imageUrl, abv, brewer {name, facebook, web}}}}",
      variables:"{}",
      operationName:null
  };

  return this.http.post('https://api.r8.beer/v1/api/graphql/', data, {
  headers:{
     'x-api-key': ''}
    });
}
}
/*
curl -v 'https://api.r8.beer/v1/api/graphql/' \
-H 'content-type: application/json' \
-H 'accept: application/json' \
-H 'x-api-key: yo5e6HwJhh4xzYm1uTUO9mdHTmAQ6TL7w5wfMNNg' \
--data-binary '{"query":"query {\n beer(id: 4934) {\n id\n name\n }\n}","variables":"{}","operationName":null}'
*/
