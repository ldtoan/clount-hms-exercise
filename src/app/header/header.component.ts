import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private _isShowProfileMenu = false;
  signedInUser = '';
  avatar = '../../assets/avatar-default.jpeg';
  logo = '../../assets/kms-logo.png';
  avatarMenu = ['My Account', 'Setting', 'Support', 'Lock Screen', 'Sign out'];

  get isUserSignedIn(): boolean {
    console.log(this.signedInUser);
    return this.signedInUser !== '';
  }

  get isShowProfileMenu(): boolean {
    return this._isShowProfileMenu;
  }

  get showProfileMenuText(): string {
    return this._isShowProfileMenu ? 'show' : '';
  }

  onProfileClick = () => {
    this._isShowProfileMenu = !this._isShowProfileMenu;
  }

  receiveMessage($event: any) {
    this.signedInUser = $event.username;
  }
}
