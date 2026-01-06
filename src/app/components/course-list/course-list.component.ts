import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService, CourseCategory, Course } from 'src/app/services/common.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnChanges {
  courseCategories: CourseCategory[] = [];
  @Input() limitPerCategory?: number; // undefined means no limit
  @Input() grid: boolean = false;
  @Input() showHeading: boolean = false;
  @Input() showCategoryHeadings: boolean = false;
  @Input() filterCategory?: string | null; // Filter by specific category

  constructor(
    private commonService: CommonService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  ngOnChanges(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.commonService.getAllCourses(this.limitPerCategory).subscribe(
      (categories) => {
        if (this.filterCategory) {
          this.courseCategories = categories.filter(cat => cat.name === this.filterCategory);
        } else {
          this.courseCategories = categories;
        }
      },
      (error) => {
        console.error('Error loading courses:', error);
      }
    );
  }

  viewProduct(course: Course) {
    this.router.navigate(['/course-description'], { state: { course } })
      .then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }
}