import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-our-clients',
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.css']
})
export class OurClientsComponent implements OnInit {
  clients: any[] = [];
  isLoading = true;
  @Input()homePage: boolean = false;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.loadClients();
  }

  private loadClients(): void {
    this.commonService.getClients().subscribe({
      next: (clients) => {
        this.clients = clients;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading clients:', error);
        this.isLoading = false;
      }
    });
  }

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


