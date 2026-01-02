import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { RatingAndReviewComponent } from './components/rating-and-review/rating-and-review.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MenubarModule } from 'primeng/menubar';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SeoService } from './services/seo.service';
import { CourseListComponent } from './components/course-list/course-list.component';
import { HttpClientModule } from '@angular/common/http';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { OurExpertsComponent } from './components/our-experts/our-experts.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CourseDetailsComponent,
    RatingAndReviewComponent,
    AboutUsComponent,
    HomeComponent,
    FooterComponent,
    CourseListComponent,
    WhyChooseUsComponent,
    OurExpertsComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
