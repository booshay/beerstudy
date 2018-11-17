import { Component, OnInit } from '@angular/core';
import {BeerSearchService} from '../beer-search.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private beerSearchService:BeerSearchService) { }
  beerName:string;
  beers:{};
  selectedBeer: {};


  searchBeer(beer){
    this.beers=null;
   this.beerSearchService.searchBeer(this.beerName)
    .subscribe(data => console.log(this.beers=data));
    this.selectedBeer=null;
  }

  onSelect(beer): void {
    this.selectedBeer = beer;
    console.log(beer);

  }

  ngOnInit() {
  }

}

