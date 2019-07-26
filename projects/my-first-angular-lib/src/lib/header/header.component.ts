import {
  Component,
  Input,
  AfterContentInit,
  ContentChildren, 
  QueryList
} from '@angular/core';

import { HeaderMenuDirective } from './header-menu-directive';
import { HeaderAvatarDirective } from './header-avatar-directive';
import { HeaderLogoDirective } from './header-logo-directive';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterContentInit {
  @ContentChildren(HeaderMenuDirective) menu: QueryList<HeaderMenuDirective>;
  @ContentChildren(HeaderAvatarDirective) avatar: QueryList<HeaderAvatarDirective>;
  @ContentChildren(HeaderLogoDirective) logo: QueryList<HeaderLogoDirective>;

  menuTemplate: HeaderMenuDirective | null;
  avatarTemplate: HeaderAvatarDirective | null;
  logoTemplate: HeaderLogoDirective | null;

  ngAfterContentInit() {
    this.menuTemplate = this.menu.first;
    this.avatarTemplate = this.avatar.first;
    this.logoTemplate = this.logo.first;
  }
}
