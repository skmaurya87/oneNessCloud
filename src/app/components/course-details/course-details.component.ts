import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: any;
  selectedImage: string = '';

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private seoService: SeoService
  ) {}

  ngOnInit() {
    // Get course data from navigation state
    this.course = window.history.state.course;
     window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (!this.course) {
      // Redirect back if no course data
      this.router.navigate(['/course-list']);
      return;
    }
    
    // Set selected image
    this.selectedImage = this.course.img;

    // Update SEO meta tags based on course data
    this.seoService.updateTitle(`${this.course.title} - Onenesscloud`);
    this.seoService.updateMetaTags({
      title: `${this.course.title} - Online Training Course | Onenesscloud`,
      description: `${this.course.description} Duration: ${this.course.duration_weeks} weeks. Rating: ${this.course.rating}/5 (${this.course.reviews} reviews). Enroll now for ₹${this.course.fees}.`,
      keywords: `${this.course.title}, ${this.course.level} course, online training, certification course, ${this.course.title} certification`,
      canonical: `https://onenesscloud.com/course-description/${this.course.id}`,
      ogTitle: `${this.course.title} - Onenesscloud`,
      ogDescription: `${this.course.description} Join ${this.course.students_enrolled}+ students. ${this.course.duration_weeks} weeks training.`,
      ogImage: `https://onenesscloud.com/${this.course.img}`
    });
  }

  goBack() {
    this.router.navigate(['/courses']);
  }
}
