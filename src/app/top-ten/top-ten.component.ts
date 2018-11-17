import { Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-top-ten',
  templateUrl: './top-ten.component.html',
  styleUrls: ['./top-ten.component.css']
})
export class TopTenComponent implements OnInit {
  beers: {};
  selectedBeer: {};
  isLess=false;

  onSelect(beer): void {
  this.selectedBeer = beer;
  console.log(beer);
}

  constructor(private dataService: DataService) { }

  ngOnInit() {
  this.dataService.getBeer()
   
   .subscribe(data=>console.log(this.beers = data));
  }

}
