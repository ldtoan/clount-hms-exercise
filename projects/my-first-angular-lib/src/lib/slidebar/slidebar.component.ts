import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.scss']
})
export class SlidebarComponent {
  @Input() menu: string[] = [];
}
