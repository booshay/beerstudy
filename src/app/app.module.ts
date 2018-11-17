import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { TopTenComponent } from './top-ten/top-ten.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AppRoutingModule } from './app-routing.module';
import { StarsComponent } from './stars/stars.component';

@NgModule({
  declarations: [
    AppComponent,
    TopTenComponent,
    BeerDetailComponent,
    NavbarComponent,
    ReviewsComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
