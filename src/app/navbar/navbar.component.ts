import { Component, OnInit } from '@angular/core';
import {BeerSearchService} from '../beer-search.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router, private beerSearchService:BeerSearchService) { }
  beerName:string;
   

  searchBeer(beerName) {
    this.beerSearchService.searchBeer(beerName);
    this.router.navigateByUrl('/home')
  }
  
  ngOnInit() {
  }

}
