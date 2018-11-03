import { Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
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
