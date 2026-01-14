import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CommonService } from '../../services/common.service';
@Component({
  selector: 'app-our-partners',
  templateUrl: './our-partners.component.html',
  styleUrls: ['./our-partners.component.css']
})
export class OurPartnersComponent implements OnInit {
  partners: any[] = [];
  isLoading = true;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.loadPartners();
  }

  private loadPartners(): void {
    this.commonService.getPartners().subscribe({
      next: (partners) => {
        this.partners = partners;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading partners:', error);
        this.isLoading = false;
      }
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    margin: 16,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1500,
    autoplayHoverPause: true,
    dots: false,
    nav: false,
    navText: ['‹', '›'],
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 6
      },
      1024: {
        items: 8
      }
    }
  };
}
