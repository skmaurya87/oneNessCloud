import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  categories: string[] = [];
  selectedCategory: string | null = null;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.getCategories().subscribe(
      (data) => {
        this.categories = data;
        // Set first category as default
        if (this.categories.length > 0) {
          this.selectedCategory = this.categories[0];
        }
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
