import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  categories: string[] = [];
  selectedCategory: string | null = null;

  constructor(
    private commonService: CommonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.commonService.getCategories().subscribe(
      (data) => {
        this.categories = data;
        
        // Check for category query parameter
        this.route.queryParams.subscribe(params => {
          const categoryParam = params['category'];
          
          if (categoryParam && this.categories.includes(categoryParam)) {
            // Set the category from query param if it exists
            this.selectedCategory = categoryParam;
          } else if (this.categories.length > 0) {
            // Otherwise, set first category as default
            this.selectedCategory = this.categories[0];
          }
        });
      },
      (error) => {
        console.error('Error loading categories:', error);
      }
    );
  }

  selectCategory(category: string): void {
    this.selectedCategory = this.selectedCategory === category ? null : category;
  }

  isSelected(category: string): boolean {
    return this.selectedCategory === category;
  }
}
