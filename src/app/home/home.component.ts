import { Component, OnInit, OnDestroy } from '@angular/core';
import {BeerSearchService} from '../beer-search.service';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnDestroy {
  beerName: string;
  beers: {};
  selectedBeer: {};
  sub: Rx.Subscription;

  constructor(private beerSearchService: BeerSearchService) {
    this.sub = this.beerSearchService.beers$.subscribe(beers => {
     this.beers = beers;
    });
  }

  onSelect(beer): void {
    this.selectedBeer = beer;
    console.log(beer);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
