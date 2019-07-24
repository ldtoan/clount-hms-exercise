import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private _isShowProfileMenu = false;
  @Input() menu: string [] = [];
  @Input() avatar: string;
  @Input() logo: string;
  @Input() username: string;

  get isShowProfileMenu(): boolean {
    return this._isShowProfileMenu;
  }

  get showProfileMenuText(): string {
    return this._isShowProfileMenu ? 'show': '';
  }

  get isUserSignedIn() : boolean {
    return this.username !== '';
  }

  onProfileClick = () => {
    this._isShowProfileMenu = !this._isShowProfileMenu;
  }
}
