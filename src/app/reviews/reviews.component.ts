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
  
  beerId: number;
  reviews: {};

  ngOnInit() {
    this.route.params.subscribe(params => this.beerId=params['id']);
    this.reviewService.getReviews()
     .subscribe(data => this.reviews = data);
    
  }

}
