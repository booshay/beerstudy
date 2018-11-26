import { Component, OnInit } from '@angular/core';
import {BeerSearchService} from '../beer-search.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private beerSearchService:BeerSearchService) { }
  
  searchBeer(beerName) {
    this.beerSearchService.searchBeer(beerName);
  }
  
  ngOnInit() {
  }

}
