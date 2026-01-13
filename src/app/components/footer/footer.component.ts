import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';

interface CategoryIndex {
  icon: string;
  name: string;
  file: string;
  displayOrder: number;
  description: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  categories: CategoryIndex[] = [];

  constructor(
    private router: Router,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.commonService.getCategoryIndex().subscribe(
      (data: any) => {
        // Get first 6 categories for footer display, sorted by displayOrder
        this.categories = data.categories
          .sort((a: CategoryIndex, b: CategoryIndex) => a.displayOrder - b.displayOrder)
          .slice(0, 6);
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
}
