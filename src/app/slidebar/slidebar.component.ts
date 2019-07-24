import { Component } from '@angular/core';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.scss']
})
export class SlidebarComponent {
  menu: string[] = ['Dashboard', 'Oders', 'Products', 'Customers', 'Reports'];
}
