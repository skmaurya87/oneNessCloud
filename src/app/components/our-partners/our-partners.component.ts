import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-our-partners',
  templateUrl: './our-partners.component.html',
  styleUrls: ['./our-partners.component.css']
})
export class OurPartnersComponent {

courses: any[ ] = ['comp-tia', 'csa-partner', 'ec-council_new', 'Exemplar-recognised-training-provider-rtp', 'iapp', 'isaca', 'microsoft-lpi', 'pecb_auth', 'tuv_sud_partner',];

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
