import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RatingAndReviewComponent } from './components/rating-and-review/rating-and-review.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CourseListComponent } from './components/course-list/course-list.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'home', component: HomeComponent },
   { path: 'about-us', component: AboutUsComponent },
   { path: 'course-list', component: CourseListComponent },
   { path: 'course-description', component: CourseDetailsComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
