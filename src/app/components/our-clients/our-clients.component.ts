import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-our-clients',
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.css']
})
export class OurClientsComponent {
courses: any[ ] = ['Accenture', 'Airtel', 'American-Express', 'AstraZeneca', 'BHEL', 'BOA', 'BPCL', 'Dell', 'Fidelity'
  , 'HCL', 'HDFC', 'ICICI-Prudential', 'Invesco', 'KPMG', 'PWC', 'SONY', 'Unilever'];

  customOptions1: OwlOptions = {
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


