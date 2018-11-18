import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css']
})
export class BeerDetailComponent implements OnInit {
  @Input() beer: {};

  isLess=true;
  moreLessBtn='more';

  moreToggle(): void{
   if (this.isLess==true){
     this.isLess=false;
     this.moreLessBtn='less';
   }
   else {
     this.isLess=true;
     this.moreLessBtn='more';
   }
  }
  constructor() { }

  ngOnInit() {
  }

}
