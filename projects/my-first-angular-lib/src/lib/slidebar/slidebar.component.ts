import { Component, Input, AfterContentInit, ContentChildren, QueryList } from '@angular/core';

import { SlidebarMenuDirective } from './slidebar-menu.directive';
@Component({
  selector: 'lib-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.scss']
})
export class SlidebarComponent implements AfterContentInit {
  @ContentChildren(SlidebarMenuDirective) menu: QueryList<SlidebarMenuDirective>;
  menuTemplate: SlidebarMenuDirective | null;

  ngAfterContentInit() {
    this.menuTemplate = this.menu.first;
  }
}
