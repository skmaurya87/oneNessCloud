import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
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
      title: 'One Ness Cloud - Professional IT Certifications Training and Courses Online',
      description: 'professional course, professional courses, online training, online training courses, certification courses, certification courses online',
      keywords: 'professional course, professional courses, online training, online training courses, certification courses, certification courses online',
      canonical: 'https://onenesscloud.com/'
    });
  }
  


}

