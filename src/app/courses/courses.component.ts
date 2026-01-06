import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  categories: string[] = [];
  selectedCategory: string | null = 'Cyber Security'; // Default to Cyber Security

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.getAllCourses().subscribe(
      (data) => {
        this.categories = data.map(cat => cat.name);
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
