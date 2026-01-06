import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'home', component: HomeComponent },
   { path: 'about-us', component: AboutUsComponent },
   { path: 'course-list', component: CourseListComponent },
   { path: 'courses', component: CoursesComponent },
   { path: 'course-description', component: CourseDetailsComponent },

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
