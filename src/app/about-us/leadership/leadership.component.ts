import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.css']
})
export class LeadershipComponent implements OnInit {
  leaders: any[] = [];
  isLoading = true;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.loadLeaders();
  }

  private loadLeaders(): void {
    this.commonService.getLeadership().subscribe({
      next: (leaders) => {
        this.leaders = leaders;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading leadership data:', error);
        this.isLoading = false;
      }
    });
  }

  onImgError(event: Event) {
  (event.target as HTMLImageElement).src = 'assets/images/leader1.jpg';
}

}
