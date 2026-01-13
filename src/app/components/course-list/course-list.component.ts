import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService, CourseCategory, Course } from 'src/app/services/common.service';

export interface CategoryIndex {
  icon: string;
  name: string;
  file: string;
  displayOrder: number;
  description: string;
}

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnChanges {
  courseCategories: CourseCategory[] = [];
  categoryIndex: CategoryIndex[] = [];
  allCategories: string[] = [];
  searchTerm: string = '';
  selectedCategory: string = 'all';
  
  @Input() limitPerCategory?: number;
  @Input() grid: boolean = false;
  @Input() showHeading: boolean = false;
  @Input() showCategoryHeadings: boolean = false;
  @Input() showFilters: boolean = false;
  @Input() showSearch: boolean = false;
  @Input() filterCategory?: string | null;

  constructor(
    private commonService: CommonService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCategoryIndex();
    this.loadCategories();
    this.loadCourses();
  }

  ngOnChanges(): void {
    this.loadCourses();
  }

  loadCategoryIndex(): void {
    this.commonService.getCategoryIndex().subscribe(
      (data: any) => {
        this.categoryIndex = data.categories.sort((a: CategoryIndex, b: CategoryIndex) => 
          a.displayOrder - b.displayOrder
        );
      },
      (error) => {
        console.error('Error loading category index:', error);
      }
    );
  }

  loadCategories(): void {
    this.commonService.getCategories().subscribe(
      (categories) => {
        this.allCategories = categories;
      },
      (error) => {
        console.error('Error loading categories:', error);
      }
    );
  }

  navigateToCategory(category: CategoryIndex): void {
    this.router.navigate(['/courses'], { 
      queryParams: { category: category.name } 
    }).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  loadCourses(): void {
    if (this.searchTerm.trim()) {
      this.performSearch();
      return;
    }

    this.commonService.getAllCourses(this.limitPerCategory).subscribe(
      (categories) => {
        if (this.filterCategory) {
          this.courseCategories = categories.filter(cat => 
            cat.name.toLowerCase() === this.filterCategory?.toLowerCase()
          );
        } else if (this.selectedCategory && this.selectedCategory !== 'all') {
          this.courseCategories = categories.filter(cat => 
            cat.name.toLowerCase() === this.selectedCategory.toLowerCase()
          );
        } else {
          this.courseCategories = categories;
        }
      },
      (error) => {
        console.error('Error loading courses:', error);
      }
    );
  }

  performSearch(): void {
    if (!this.searchTerm.trim()) {
      this.loadCourses();
      return;
    }

    this.commonService.searchCourses(this.searchTerm).subscribe(
      (categories) => {
        this.courseCategories = categories;
      },
      (error) => {
        console.error('Error searching courses:', error);
      }
    );
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.searchTerm = '';
    this.loadCourses();
  }

  onSearchChange(): void {
    this.performSearch();
  }

  clearFilters(): void {
    this.selectedCategory = 'all';
    this.searchTerm = '';
    this.loadCourses();
  }

  viewProduct(course: Course) {
    this.router.navigate(['/course-description'], { state: { course } })
      .then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }

  get totalCoursesCount(): number {
    return this.courseCategories.reduce((sum, cat) => sum + cat.courses.length, 0);
  }
}