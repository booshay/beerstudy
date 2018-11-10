import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ReviewsService} from '../reviews.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private reviewService: ReviewsService) { }
  today: number=Date.now();
  beerId: number;
  reviews: {};
  reviewScore={
    0:0, 1:0, 2:0, 3:0, 4:0, 5:0
  };
  testno=2;
  
  
  
  testFunc(number){
    return Math.round(number);
  }


  ratingBreakdown(e){
   let vote=(Math.round(e));
   this.reviewScore[vote]+=1;
   //console.log(this.reviewScore)
  }



  ngOnInit() {
    this.route.params.subscribe(params => this.beerId=params['id']);
    this.reviewService.getReviews(this.beerId)
     .subscribe(data => this.reviews = data);
    
  }

  ngAfterViewChecked(){
    if(document.getElementById("5star")){
      document.getElementById("5star").innerText= String(this.reviewScore[5]);
      document.getElementById("4star").innerText= String(this.reviewScore[4]);
      document.getElementById("3star").innerText= String(this.reviewScore[3])
      document.getElementById("2star").innerText= String(this.reviewScore[2])
      document.getElementById("1star").innerText= String(this.reviewScore[1])
    }
   
     console.log(this.reviewScore)
  }

}
