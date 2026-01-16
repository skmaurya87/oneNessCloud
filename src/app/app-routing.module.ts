import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about-us/about/about.component';
import { HappinessGuaranteeComponent } from './about-us/happiness-guarantee/happiness-guarantee.component';
import { LeadershipComponent } from './about-us/leadership/leadership.component';
import { OnenessKoshisComponent } from './about-us/oneness-koshis/oneness-koshis.component';
import { OurClientsComponent } from './about-us/our-clients/our-clients.component';
import { StudentFeedbackComponent } from './about-us/student-feedback/student-feedback.component';
import { TestimonialComponent } from './about-us/testimonial/testimonial.component';
import { LiveOnlineTraningComponent } from './live-online-traning/live-online-traning.component';
import { ClassroomTrainingComponent } from './classroom-training/classroom-training.component';
import { OneOnOneTrainingComponent } from './one-on-one-training/one-on-one-training.component';
import { WebinarsAsAServiceComponent } from './webinars-as-a-service/webinars-as-a-service.component';
import { UpcomingWebinarsComponent } from './upcoming-webinars/upcoming-webinars.component';
import { OurPartnersComponent } from './about-us/about/our-partners/our-partners.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'home', component: HomeComponent },
   { path: 'about-us', component: AboutUsComponent,
     children: [
      {path: 'about' , component: AboutComponent},
      {path: 'happiness-guarantee' , component: HappinessGuaranteeComponent},
      {path: 'leadership' , component: LeadershipComponent},
      {path: 'oneness-koshis' , component: OnenessKoshisComponent},
      {path: 'our-clients' , component: OurClientsComponent},
      {path: 'our-partners' , component: OurPartnersComponent},
      {path: 'student-feedback' , component: StudentFeedbackComponent},
      {path: 'testimonial' , component: TestimonialComponent},
    ] 
   },
   { path: 'courses', component: CoursesComponent },
   { path: 'live-online-training', component: LiveOnlineTraningComponent },
   { path: 'classroom-training', component: ClassroomTrainingComponent },
   { path: 'one-on-one-training', component: OneOnOneTrainingComponent },
   { path: 'webinars-as-a-service', component: WebinarsAsAServiceComponent },
   { path: 'upcoming-webinars', component: UpcomingWebinarsComponent },
   { path: 'course-description', component: CourseDetailsComponent },
   { path: 'contact-us', component: ContactUsComponent },
   

];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    scrollPositionRestoration: 'top',   // 👈 scroll to top
    anchorScrolling: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
