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
import { CoursesComponent } from './courses/courses.component';
import { OurPartnersComponent } from './components/our-partners/our-partners.component';
import { OurClientsComponent } from './about-us/our-clients/our-clients.component';
import { provideSweetAlert2 } from '@sweetalert2/ngx-sweetalert2';
import { AboutComponent } from './about-us/about/about.component';
import { LeadershipComponent } from './about-us/leadership/leadership.component';
import { HappinessGuaranteeComponent } from './about-us/happiness-guarantee/happiness-guarantee.component';
import { StudentFeedbackComponent } from './about-us/student-feedback/student-feedback.component';
import { TestimonialComponent } from './about-us/testimonial/testimonial.component';
import { OnenessKoshisComponent } from './about-us/oneness-koshis/oneness-koshis.component';
import { LiveOnlineTraningComponent } from './live-online-traning/live-online-traning.component';
import { ClassroomTrainingComponent } from './classroom-training/classroom-training.component';
import { OneOnOneTrainingComponent } from './one-on-one-training/one-on-one-training.component';
import { WebinarsAsAServiceComponent } from './webinars-as-a-service/webinars-as-a-service.component';
import { UpcomingWebinarsComponent } from './upcoming-webinars/upcoming-webinars.component';
import { HeadingComponent } from './heading/heading.component';
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
    OurExpertsComponent,
    CoursesComponent,
    OurPartnersComponent,
    OurClientsComponent,
    AboutComponent,
    LeadershipComponent,
    HappinessGuaranteeComponent,
    StudentFeedbackComponent,
    TestimonialComponent,
    OnenessKoshisComponent,
    LiveOnlineTraningComponent,
    ClassroomTrainingComponent,
    OneOnOneTrainingComponent,
    WebinarsAsAServiceComponent,
    UpcomingWebinarsComponent,
    HeadingComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule,
    HttpClientModule,
  
  ],
  providers: [
    SeoService,
    provideSweetAlert2()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
