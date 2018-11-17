import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TopTenComponent} from './top-ten/top-ten.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent  },
  { path: 'top-ten', component: TopTenComponent  },
  { path : 'reviews/:id', component: ReviewsComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
