import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

interface CategoryIndex {
  icon: string;
  name: string;
  file: string;
  displayOrder: number;
  description: string;
}

interface MenuItem {
  label: string;
  routerLink?: string;
  hasDropdown?: boolean;
  submenu?: MenuItem[];
  mobileOpenKey?: string;
  isDynamic?: boolean;
  icon?: string;  
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  iconChange: boolean = false;
  isMobileMenuOpen: boolean = false;
  mobileSubmenuStates: { [key: string]: boolean } = {};
  categories: CategoryIndex[] = [];

  // Menu Configuration - Edit this to add/remove/reorder menu items
  menuItems: MenuItem[] = [
      {
      label: 'Our Courses',
      routerLink: 'courses',
      hasDropdown: true,
      mobileOpenKey: 'courses',
      isDynamic: true,  // This menu will be populated dynamically
      submenu: []  // Will be filled from courses-index.json
    },
    {
      label: 'About Us',
      routerLink: 'about-us/about',
      hasDropdown: true,
      mobileOpenKey: 'aboutUs',
      submenu: [
    { label: 'Happiness Guarantee', routerLink: '/about-us/happiness-guarantee', icon: 'fas fa-smile' },
    { label: 'Leadership', routerLink: '/about-us/leadership', icon: 'fas fa-users' },
    { label: 'Oneness Koshis', routerLink: '/about-us/oneness-koshis', icon: 'fas fa-om' },
    { label: 'Our Clients', routerLink: '/about-us/our-clients', icon: 'fas fa-handshake' },
    { label: 'Our Partners', routerLink: '/about-us/our-partners', icon: 'fas fa-handshake' },
    { label: 'Student Feedback', routerLink: '/about-us/student-feedback', icon: 'fas fa-comments' },
    { label: 'Testimonial', routerLink: '/about-us/testimonial', icon: 'fas fa-quote-left' }
      ]
    },
    {
      label: 'Learning Options',
      routerLink: 'learning-options',
      hasDropdown: true,
      mobileOpenKey: 'learningOptions',
      submenu: [
        { label: 'Live Online Training', routerLink: 'live-online-training' },
        { label: 'Classroom Training', routerLink: 'classroom-training' },
        { label: '1-on-1 Training', routerLink: 'one-on-one-training' },
        { label: 'Webinars as a Service', routerLink: 'webinars-as-a-service' },
        { label: 'Upcoming webinars', routerLink: 'upcoming-webinars' }
      ]
    },
    {
      label: 'Contact Us',
      routerLink: 'contact-us', 
      hasDropdown: false
    }
  ];

  constructor(
    private el: ElementRef,
    private router: Router,
    private commonService: CommonService
  ) {}
  ngOnInit(): void {
    // Initialize mobile submenu states
    this.menuItems.forEach(item => {
      if (item.mobileOpenKey) {
        this.mobileSubmenuStates[item.mobileOpenKey] = false;
      }
    });

    // Load dynamic categories from courses-index.json
    this.loadCategories();
  }

  loadCategories(): void {
    this.commonService.getCategoryIndex().subscribe(
      (data: any) => {
        this.categories = data.categories.sort((a: CategoryIndex, b: CategoryIndex) => 
          a.displayOrder - b.displayOrder
        );
        
        // Update the 'Our Courses' menu with dynamic categories
        const coursesMenu = this.menuItems.find(item => item.isDynamic);
        if (coursesMenu) {
          coursesMenu.submenu = this.categories.map(cat => ({
            label: cat.name,
            routerLink: ''  // We'll use click handler instead
          }));
        }
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
      this.closeMobileMenu();
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      // Reset all submenu states when closing main menu
      Object.keys(this.mobileSubmenuStates).forEach(key => {
        this.mobileSubmenuStates[key] = false;
      });
    }
  }

  toggleMobileSubmenu(key: string) {
    this.mobileSubmenuStates[key] = !this.mobileSubmenuStates[key];
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    Object.keys(this.mobileSubmenuStates).forEach(key => {
      this.mobileSubmenuStates[key] = false;
    });
  }

}