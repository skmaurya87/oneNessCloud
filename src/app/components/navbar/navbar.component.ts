import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

interface MenuItem {
  label: string;
  routerLink?: string;
  hasDropdown?: boolean;
  submenu?: MenuItem[];
  mobileOpenKey?: string;
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

  // Menu Configuration - Edit this to add/remove/reorder menu items
  menuItems: MenuItem[] = [
      {
      label: 'Our Courses',
      routerLink: 'courses',
      hasDropdown: true,
      mobileOpenKey: 'courses',
      submenu: [
        { label: 'Identity Management', routerLink: 'courses/identity-management' },
        { label: 'Microsoft', routerLink: 'courses/microsoft' },
        { label: 'Cyber Security', routerLink: 'courses/cyber-security' },
        { label: 'Access Management', routerLink: 'courses/access-management' },
      ]
    },
    {
      label: 'About Us',
      routerLink: 'about-us',
      hasDropdown: true,
      mobileOpenKey: 'aboutUs',
      submenu: [
        { label: 'About Us', routerLink: 'about-us/about' },
        { label: 'Our Client', routerLink: 'about-us/our-client' },
        { label: 'Leadership', routerLink: 'about-us/leadership' },
        { label: 'Partners', routerLink: 'about-us/partners' },
        { label: 'Happiness Guarantee', routerLink: 'about-us/happiness-guarantee' },
        { label: 'Student Feedback', routerLink: 'about-us/student-feedback' },
        { label: 'Testimonial', routerLink: 'about-us/testimonial' },
        { label: 'Oneness Koshis', routerLink: 'about-us/oneness-koshis' }
      ]
    },
    {
      label: 'Learning Options',
      routerLink: 'learning-options',
      hasDropdown: true,
      mobileOpenKey: 'learningOptions',
      submenu: [
        { label: 'Live Online Training', routerLink: 'learning-options/live-online-training' },
        { label: 'Classroom Training', routerLink: 'learning-options/classroom-training' },
        { label: '1-on-1 Training', routerLink: 'learning-options/1-on-1-training' },
        { label: 'Webinars as a Service', routerLink: 'learning-options/webinars-as-a-service' },
        { label: 'Upcoming webinars', routerLink: 'learning-options/upcoming-webinars' }
      ]
    },
    {
      label: 'Contact Us',
      routerLink: 'contact-us',
      hasDropdown: false
    }
  ];

  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    // Initialize mobile submenu states
    this.menuItems.forEach(item => {
      if (item.mobileOpenKey) {
        this.mobileSubmenuStates[item.mobileOpenKey] = false;
      }
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