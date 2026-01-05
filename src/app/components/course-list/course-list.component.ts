import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: any[] = [];
  @Input() popularCourse: boolean = true;

  constructor(private http: HttpClient, private seoService: SeoService, private router: Router) {}

  ngOnInit(): void {
    const courseFiles = [
      'assets/courses/cyber-security.json',
      'assets/courses/identity.json',
      'assets/courses/access-management.json'
    ];

    courseFiles.forEach(file => {
      this.http.get<any[]>(file).subscribe(data => {
        this.courses = [...this.courses, ...data.slice(0, 4)];
      });
    });

    this.seoService.updateTitle('Course List');
    this.seoService.updateMetaTags({
      title: 'professional course, professional courses, online training, online training courses, certification courses, certification courses online',
      description: 'Explore our extensive course list offering professional training and certification courses online. Enhance your skills with our expert-led programs designed for career growth.',
      keywords: 'professional course, professional courses, online training, online training courses, certification courses, certification courses online',
      canonical: 'https://onenesscloud.com/course-list',
      ogTitle: 'Course List - Onenesscloud',
      ogDescription: 'Explore our extensive course list offering professional training and certification courses online. Enhance your skills with our expert-led programs designed for career growth.',
      ogImage: 'https://onenesscloud.com/assets/images/og-image-course-list.jpg'
    });
  }
    viewProduct(course: any) {
    this.router.navigate(['/course-description'], { state: { course } })
     .then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}