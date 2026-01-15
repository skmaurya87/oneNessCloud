import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent {
  @Input() heading: string = '';
  @Input() align: 'text-center' | 'text-left' | 'text-right' = 'text-center';

}
