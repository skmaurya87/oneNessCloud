import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.seoService.updateMetaTags({
      title: 'ShrijanScaffolding Towers - Best Aluminium Scaffolding in Pratapgarh | Premium Quality',
      description: 'Leading scaffolding supplier in Pratapgarh, UP. Rent aluminium scaffolding, mobile towers, industrial ladders. 15+ years experience, ISO certified, 24/7 support. Call +91-8416839999',
      keywords: 'scaffolding Pratapgarh, aluminium scaffolding rental, mobile scaffolding towers UP, industrial ladders, scaffolding supplier Pratapgarh, construction equipment rental',
      canonical: 'https://shrijanscaffolding.com'
    });
  }


}

