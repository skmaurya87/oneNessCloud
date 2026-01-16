import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface MenuItem {
  label: string;
  route: string;
  icon?: string;
}

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  activeRoute = '';
  
  menuItems: MenuItem[] = [
    { label: 'About', route: '/about-us/about', icon: 'fas fa-info-circle' },
    { label: 'Happiness Guarantee', route: '/about-us/happiness-guarantee', icon: 'fas fa-smile' },
    { label: 'Leadership', route: '/about-us/leadership', icon: 'fas fa-users' },
    { label: 'Oneness Koshis', route: '/about-us/oneness-koshis', icon: 'fas fa-om' },
    { label: 'Our Clients', route: '/about-us/our-clients', icon: 'fas fa-handshake' },
    { label: 'Our Partners', route: '/about-us/our-partners', icon: 'fas fa-handshake' },
    { label: 'Student Feedback', route: '/about-us/student-feedback', icon: 'fas fa-comments' },
    { label: 'Testimonial', route: '/about-us/testimonial', icon: 'fas fa-quote-left' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    // Listen to route changes to update active menu item
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.activeRoute = (event as NavigationEnd).urlAfterRedirects;
      });
    
    // Set initial active route
    this.activeRoute = this.router.url;
    
    // If on base about-us route, redirect to about section
    if (this.activeRoute === '/about-us' || this.activeRoute === '/about-us/') {
      this.router.navigate(['/about-us/about']);
    }
  }

  isActive(route: string): boolean {
    return this.activeRoute === route;
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
